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
