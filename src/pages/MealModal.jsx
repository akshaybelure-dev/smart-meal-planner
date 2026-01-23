// function formatKeyLabel(key) {
//   return key
//     .replaceAll("_", " ")
//     .split(" ")
//     .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//     .join(" ");
// }

// export default function MealModal({ openMeal, onClose, onReplace }) {
//   if (!openMeal) return null;

//   const { day, mealType, data } = openMeal;

//   return (
//     <div
//       className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50"
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b1220] p-6"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex items-start justify-between gap-4">
//           <div>
//             <h2 className="text-2xl font-bold text-white">{data.name}</h2>
//             <p className="text-white/60 text-sm mt-1">
//               {day} • {mealType} • {data.time ?? "—"} min • {data.kcal ?? "—"}{" "}
//               kcal • {data.protein ?? "—"}g protein
//             </p>
//           </div>

//           <button
//             onClick={onClose}
//             className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white/80"
//           >
//             Close
//           </button>
//         </div>

//         {/* Actions */}
//         <div className="mt-5 flex gap-3">
//           <button
//             onClick={() => onReplace?.(day, mealType, data)}
//             className="px-4 py-2 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400"
//           >
//             Replace Meal
//           </button>

//           <button
//             onClick={onClose}
//             className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15"
//           >
//             Done
//           </button>
//         </div>

//         {/* Ingredients */}
//         <div className="mt-6">
//           <h3 className="text-white/80 font-semibold mb-3">Ingredients</h3>

//           <div className="space-y-2">
//             {(data.ingredients || []).length === 0 ? (
//               <p className="text-white/40 text-sm">No ingredients added.</p>
//             ) : (
//               data.ingredients.map((ing, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
//                 >
//                   <span className="text-white/90 font-medium">
//                     {formatKeyLabel(ing.key)}
//                   </span>
//                   <span className="text-white/50 text-sm">
//                     {ing.qty}
//                     {ing.unit}
//                   </span>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>

//         {/* Steps */}
//         <div className="mt-6">
//           <h3 className="text-white/80 font-semibold mb-3">Preparation</h3>

//           {(data.steps || []).length === 0 ? (
//             <p className="text-white/40 text-sm">No steps added.</p>
//           ) : (
//             <ol className="space-y-2 list-decimal list-inside text-white/70 text-sm">
//               {data.steps.map((step, i) => (
//                 <li key={i}>{step}</li>
//               ))}
//             </ol>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect } from "react";

export default function MealModal({ openMeal, onClose, onReplace }) {
  // Close on ESC
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
        {/* Header */}
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

        {/* Body */}
        <div className="mealModalBody">
          {/* Ingredients */}
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

          {/* Steps */}
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

        {/* Footer */}
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
