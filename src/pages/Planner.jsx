import { Link } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";
import { useEffect, useMemo, useState } from "react";
import { MEAL_DB } from "../data/meals";
import MealModal from "../pages/MealModal";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MEALS = ["Breakfast", "Lunch", "Dinner"];

export default function Planner() {
  const { profile } = useProfile();

  const userKey = profile.name.trim().toLowerCase();
  const planKey = `smartmeal_plan_${userKey}`;

  const [plan, setPlan] = useState(() => {
    const saved = localStorage.getItem(planKey);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    const saved = localStorage.getItem(planKey);
    setPlan(saved ? JSON.parse(saved) : {});
  }, [planKey]);

  const [openMeal, setOpenMeal] = useState(null);

  const dietKey = useMemo(() => {
    return profile.diet
      .trim()
      .toLowerCase()
      .replaceAll("-", "")
      .replaceAll(" ", "");
  }, [profile.diet]);

  function generatePlan() {
    const db = MEAL_DB[dietKey] || MEAL_DB.veg;
    const newPlan = {};

    DAYS.forEach((day) => {
      newPlan[day] = {};

      MEALS.forEach((mealType) => {
        const options = db?.[mealType] || [];

        if (options.length === 0) {
          newPlan[day][mealType] = null;
          return;
        }

        const randomMeal = options[Math.floor(Math.random() * options.length)];
        newPlan[day][mealType] = randomMeal;
      });
    });

    setPlan(newPlan);
    localStorage.setItem(planKey, JSON.stringify(newPlan));
  }

  function clearPlan() {
    setPlan({});
    localStorage.removeItem(planKey);
  }

  function replaceMeal(day, mealType, currentMeal) {
    const db = MEAL_DB[dietKey] || MEAL_DB.veg;
    const options = db?.[mealType] || [];
    if (options.length === 0) return;

    let newMeal = options[Math.floor(Math.random() * options.length)];

    if (options.length > 1) {
      while (newMeal?.name === currentMeal?.name) {
        newMeal = options[Math.floor(Math.random() * options.length)];
      }
    }

    const updatedPlan = {
      ...plan,
      [day]: {
        ...plan[day],
        [mealType]: newMeal,
      },
    };

    setPlan(updatedPlan);
    localStorage.setItem(planKey, JSON.stringify(updatedPlan));
    setOpenMeal({ day, mealType, data: newMeal });
  }

  return (
    <div className="plannerPage">
      <div className="plannerFrame">
        <header className="plannerNav">
          <div className="plannerBrand">
            <span className="plannerLogo">🍳</span>
            <span className="plannerTitle">Weekly Planner</span>
          </div>

          <div className="plannerMeta">
            <span className="plannerMetaItem">{profile.name.toUpperCase()}</span>
            <span className="plannerMetaDot">•</span>
            <span className="plannerMetaItem">{profile.diet.toUpperCase()}</span>
          </div>
          <div className="plannerActions">
            <Link to="/onboarding" className="btn btn--ghost">
              Edit Profile
            </Link>

            <Link to="/grocery" className="btn btn--ghost">
              Grocery List
            </Link>

            <button onClick={clearPlan} className="btn btn--ghost">
              Clear Plan
            </button>

            <button onClick={generatePlan} className="btn btn--primary">
              Generate Plan
            </button>
          </div>
        </header>

        <main className="plannerBody">
          <div className="plannerGridWrap">
            <div className="plannerGrid">
              <div className="plannerGridCorner"></div>

              {DAYS.map((d) => (
                <div key={d} className="plannerGridDay">
                  {d}
                </div>
              ))}

              {MEALS.map((mealType) => (
                <div key={mealType} className="plannerRow">
                  <div className="plannerGridMealType">{mealType}</div>

                  {DAYS.map((day) => {
                    const meal = plan?.[day]?.[mealType];

                    return (
                      <button
                        key={mealType + day}
                        className={`mealCard ${meal ? "mealCard--filled" : ""}`}
                        onClick={() => {
                          if (!meal) return;
                          setOpenMeal({ day, mealType, data: meal });
                        }}
                      >
                        {meal ? (
                          <>
                            <div className="mealCardTitle">{meal.name}</div>
                            <div className="mealCardMeta">
                              <span>{meal.kcal ?? "—"} kcal</span>
                              <span className="mealCardDot">•</span>
                              <span>{meal.protein ?? "—"}g protein</span>
                              <span className="mealCardDot">•</span>
                              <span>{meal.time ?? "—"} min</span>
                            </div>
                            <div className="mealCardHint">
                              Click to view details
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="mealCardEmptyTitle">Add meal</div>
                            <div className="mealCardEmptyMeta">
                              kcal • protein
                            </div>
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <MealModal
        openMeal={openMeal}
        onClose={() => setOpenMeal(null)}
        onReplace={replaceMeal}
      />
    </div>
  );
}
