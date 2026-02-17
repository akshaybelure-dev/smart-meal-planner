import { Link } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";
import { useEffect, useMemo, useState } from "react";
import { GROCERY_CATEGORIES } from "../data/groceryMap.js";

function formatLabel(key) {
  return key
    .replaceAll("_", " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Grocery() {
  const { profile } = useProfile();

  const userKey = profile.name.trim().toLowerCase();
  const planKey = `smartmeal_plan_${userKey}`;

  const saved = localStorage.getItem(planKey);
  const plan = saved ? JSON.parse(saved) : null;

  const boughtKey = `smartmeal_bought_${userKey}`;
  const [bought, setBought] = useState(() => {
    const savedBought = localStorage.getItem(boughtKey);
    return savedBought ? JSON.parse(savedBought) : {};
  });

  useEffect(() => {
    localStorage.setItem(boughtKey, JSON.stringify(bought));
  }, [boughtKey, bought]);

  const [query, setQuery] = useState("");

  function toggleBought(itemKey) {
    setBought((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  }

  function clearBought() {
    setBought({});
    localStorage.removeItem(boughtKey);
  }

  const { totals, categorized } = useMemo(() => {
    const totalsMap = {}; 

    if (plan) {
      for (const day in plan) {
        for (const mealType in plan[day]) {
          const meal = plan[day][mealType];
          const ingredients = meal?.ingredients || [];

          for (const ing of ingredients) {
            if (!ing?.key) continue;

            const unit = ing.unit || "";
            const mapKey = `${ing.key}__${unit}`;

            if (!totalsMap[mapKey]) {
              totalsMap[mapKey] = {
                key: ing.key,
                label: formatLabel(ing.key),
                unit,
                qty: 0,
              };
            }

            totalsMap[mapKey].qty += Number(ing.qty || 0);
          }
        }
      }
    }

    const totalsArr = Object.values(totalsMap)
      .map((x) => ({ ...x, qty: Math.round(x.qty * 10) / 10 }))
      .sort((a, b) => a.label.localeCompare(b.label));

    const cat = {};
    for (const category in GROCERY_CATEGORIES) cat[category] = [];
    cat["Others"] = [];

    for (const item of totalsArr) {
      let placed = false;

      for (const category in GROCERY_CATEGORIES) {
        if (GROCERY_CATEGORIES[category].includes(item.label)) {
          cat[category].push(item);
          placed = true;
          break;
        }
      }

      if (!placed) cat["Others"].push(item);
    }

    return { totals: totalsArr, categorized: cat };
  }, [plan]);

  function copyGroceryList() {
    if (!plan) return;

    let text = `Grocery List for ${profile.name}\n\n`;

    Object.entries(categorized).forEach(([category, items]) => {
      if (items.length === 0) return;

      text += `${category}:\n`;
      items.forEach((i) => {
        text += `- ${i.label}: ${i.qty}${i.unit}\n`;
      });
      text += "\n";
    });

    navigator.clipboard.writeText(text);
    alert("Grocery list copied ✅");
  }

 
return (
  <div className="groceryPage">
    <div className="groceryFrame">
      <header className="groceryNav">
        <div className="groceryBrand">
          <span className="groceryLogo">🛒</span>
          <span className="groceryTitle">Grocery List</span>
        </div>

        <div className="groceryMeta">
          <span className="groceryMetaItem">{profile.name}</span>
          <span className="groceryMetaDot">•</span>
          <span className="groceryMetaItem">{profile.diet}</span>
        </div>

        <div className="groceryActions">
          <Link to="/planner" className="btn btn--ghost">
            Back to Planner
          </Link>
        </div>
      </header>

      <main className="groceryBody">
        <div className="groceryCard">
          {!plan ? (
            <p className="groceryEmpty">
              No plan found for <b>{profile.name}</b>. Go back and click{" "}
              <b>Generate Plan</b>.
            </p>
          ) : (
            <>
              <div className="groceryTopRow">
                <div>
                  <p className="groceryDesc">
                    Grocery list for <b>{profile.name}</b> (calculated from meal
                    ingredients)
                  </p>
                  <p className="grocerySmall">
                    Total unique items: <b>{totals.length}</b>
                  </p>
                </div>

                <div className="groceryBtnRow">
                  <button onClick={copyGroceryList} className="btn btn--primary">
                    Copy List
                  </button>

                  <button onClick={clearBought} className="btn btn--soft">
                    Clear Checklist
                  </button>
                </div>
              </div>

              <div className="grocerySearchWrap">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search items... (e.g. paneer, rice)"
                  className="grocerySearch"
                />
              </div>

              <div className="grocerySections">
                {Object.entries(categorized).map(([category, items]) => {
                  const filteredItems = items.filter((i) =>
                    i.label.toLowerCase().includes(query.trim().toLowerCase())
                  );

                  if (filteredItems.length === 0) return null;

                  return (
                    <section key={category} className="grocerySection">
                      <h2 className="grocerySectionTitle">{category}</h2>

                      <div className="groceryItems">
                        {filteredItems.map((i) => {
                          const checked = !!bought[i.key];

                          return (
                            <button
                              key={`${i.key}__${i.unit}`}
                              onClick={() => toggleBought(i.key)}
                              className={`groceryItem ${
                                checked ? "groceryItem--checked" : ""
                              }`}
                            >
                              <div className="groceryItemLeft">
                                <div
                                  className={`groceryCheck ${
                                    checked ? "groceryCheck--on" : ""
                                  }`}
                                >
                                  {checked ? "✓" : ""}
                                </div>

                                <span className="groceryItemName">
                                  {i.label}
                                </span>
                              </div>

                              <span className="groceryQty">
                                {i.qty}
                                {i.unit}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </section>
                  );
                })}
              </div>

              {totals.length === 0 && (
                <p className="groceryWarn">
                  No ingredients found in meals. Make sure each meal has an{" "}
                  <code>ingredients</code> array.
                </p>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  </div>
);
}
