// import { useProfile } from "../context/ProfileContext";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useRef } from "react";

// export default function Onboarding() {
//   const { profile, setProfile } = useProfile();
// const navigate = useNavigate();
// const originalProfileRef = useRef(null);

// useEffect(() => {
//   // store the profile that was loaded when onboarding opened
//   originalProfileRef.current = JSON.stringify(profile);
// }, []);


//   function update(key, value) {
//     setProfile((prev) => ({ ...prev, [key]: value }));
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center px-6 py-10">
//       <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6">
//         <h2 className="text-2xl font-bold">Setup your plan</h2>
//         <p className="text-white/60 mt-2">
//           This profile will be used to generate meals + grocery list.
//         </p>

//         <div className="mt-8 space-y-5">
//           {/* Name */}
//           <div>
//             <label className="text-sm text-white/70">Name</label>
//             <input
//               required
//               minLength={2}
//               value={profile.name}
//               onChange={(e) => update("name", e.target.value)}
//               className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
//               placeholder="Your name"
//             />
//           </div>

//           {/* Goal */}
//           <div>
//             <label className="text-sm text-white/70">Goal</label>
//             <select
//               value={profile.goal}
//               onChange={(e) => update("goal", e.target.value)}
//               className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
//             >
//               <option value="fat_loss">Fat loss</option>
//               <option value="maintenance">Maintenance</option>
//               <option value="muscle_gain">Muscle gain</option>
//             </select>
//           </div>

//           {/* Diet */}
//           <div>
//             <label className="text-sm text-white/70">Diet</label>
//             <select
//               value={profile.diet}
//               onChange={(e) => update("diet", e.target.value)}
//               className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
//             >
//               <option value="veg">Vegetarian</option>
//               <option value="eggetarian">Eggetarian</option>
//               <option value="nonveg">Non-veg</option>
//             </select>
//           </div>

          

//           <div className="pt-2">
//            <button
//   onClick={() => {
//     const cleanedName = profile.name.trim();

//     if (!cleanedName) {
//       alert("Please enter your name");
//       return;
//     }
//     if(cleanedName.length < 2){
//       alert("name should be more than 2 chareters");
//       return;
//     }
// setProfile((prev) => ({ ...prev, name: cleanedName }));

//     navigate("/planner");
//   }}

//   className="w-full rounded-2xl bg-green-500 text-black font-semibold py-3 hover:bg-green-400"
// >
//   Save & Continue
// </button>






//           </div>

//           <div className="text-xs text-white/40">
//             Auto-saved: refresh the page and your values should stay.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useProfile } from "../context/ProfileContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Onboarding() {
  const { profile, setProfile } = useProfile();
  const navigate = useNavigate();
  const originalProfileRef = useRef(null);

  useEffect(() => {
    originalProfileRef.current = JSON.stringify(profile);
  }, []);

  function update(key, value) {
    setProfile((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="onboarding">
      <div className="onboarding__card">
        <h2 className="onboarding__title">Setup your plan</h2>
        <p className="onboarding__subtitle">
          This profile will be used to generate meals + grocery list.
        </p>

        <div className="onboarding__form">
          {/* Name */}
          <div className="onboarding__field">
            <label className="onboarding__label">Name</label>
            <input
              required
              minLength={2}
              value={profile.name}
              onChange={(e) => update("name", e.target.value)}
              className="onboarding__input"
              placeholder="Your name"
            />
          </div>

          {/* Goal */}
          <div className="onboarding__field">
            <label className="onboarding__label">Goal</label>
            <select
              value={profile.goal}
              onChange={(e) => update("goal", e.target.value)}
              className="onboarding__input"
            >
              <option value="fat_loss">Fat loss</option>
              <option value="maintenance">Maintenance</option>
              <option value="muscle_gain">Muscle gain</option>
            </select>
          </div>

          {/* Diet */}
          <div className="onboarding__field">
            <label className="onboarding__label">Diet</label>
            <select
              value={profile.diet}
              onChange={(e) => update("diet", e.target.value)}
              className="onboarding__input"
            >
              <option value="veg">Vegetarian</option>
              <option value="eggetarian">Eggetarian</option>
              <option value="nonveg">Non-veg</option>
            </select>
          </div>

          <div className="onboarding__actions">
            <button
              onClick={() => {
                const cleanedName = profile.name.trim();

                if (!cleanedName) {
                  alert("Please enter your name");
                  return;
                }
                if (cleanedName.length < 2) {
                  alert("name should be more than 2 chareters");
                  return;
                }

                setProfile((prev) => ({ ...prev, name: cleanedName }));
                navigate("/planner");
              }}
              className="onboarding__btn"
            >
              Save & Continue
            </button>
          </div>

          <div className="onboarding__hint">
            Auto-saved: refresh the page and your values should stay.
          </div>
        </div>
      </div>
    </div>
  );
}
