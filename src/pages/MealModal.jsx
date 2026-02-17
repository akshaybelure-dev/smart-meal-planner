import { useEffect } from "react";

export default function MealModal({ openMeal, onClose, onReplace }) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }

    if (openMeal) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [openMeal, onClose]);

  if (!openMeal) return null;

  const meal = openMeal.data;

  return (
    <div className="mealModalOverlay" onClick={onClose}>
      <div className="mealModalCard" onClick={(e) => e.stopPropagation()}>
        <div className="mealModalHeader">
          <div>
            <h2 className="mealModalTitle">{meal?.name}</h2>
            <p className="mealModalMeta">
              {openMeal.day} • {openMeal.mealType} • {meal?.time ?? "—"} min •{" "}
              {meal?.kcal ?? "—"} kcal • {meal?.protein ?? "—"}g protein
            </p>
          </div>

          <button className="mealModalClose" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="mealModalBody">
          <div className="mealModalSection">
            <h3 className="mealModalSectionTitle">Ingredients</h3>

            {meal?.ingredients?.length ? (
              <ul className="mealModalList">
                {meal.ingredients.map((ing, i) => (
                  <li key={i} className="mealModalListItem">
                    <span className="mealModalListKey">{ing.key}</span>
                    <span className="mealModalListQty">
                      {ing.qty}
                      {ing.unit}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mealModalEmpty">No ingredients found.</p>
            )}
          </div>

          <div className="mealModalSection">
            <h3 className="mealModalSectionTitle">Preparation</h3>

            {meal?.steps?.length ? (
              <ol className="mealModalSteps">
                {meal.steps.map((step, i) => (
                  <li key={i} className="mealModalStep">
                    {step}
                  </li>
                ))}
              </ol>
            ) : (
              <p className="mealModalEmpty">No steps found.</p>
            )}
          </div>
        </div>

        <div className="mealModalFooter">
          <button
            className="mealModalBtn mealModalBtnGhost"
            onClick={onClose}
          >
            Close
          </button>

          <button
            className="mealModalBtn mealModalBtnPrimary"
            onClick={() => onReplace(openMeal.day, openMeal.mealType, meal)}
          >
            Replace Meal
          </button>
        </div>
      </div>
    </div>
  );
}
