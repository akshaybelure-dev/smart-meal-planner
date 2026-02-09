import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";
import { useEffect, useRef, useState } from "react";

export default function Landing() {
  const { profile, setProfile } = useProfile();
  const navigate = useNavigate();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateOpen, setAnimateOpen] = useState(false);


 useEffect(() => {
  if (location.pathname === "/onboarding") {
    setIsModalOpen(true);
  }
}, [location.pathname]);

useEffect(() => {
  if (isModalOpen) {
    requestAnimationFrame(() => setAnimateOpen(true));
  } else {
    setAnimateOpen(false);
  }
}, [isModalOpen]);


  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    if (location.pathname === "/onboarding") {
      navigate("/", { replace: true });
    }
  }

  function update(key, value) {
    setProfile((prev) => ({ ...prev, [key]: value }));
  }

  function handleSaveContinue() {
    const cleanedName = profile.name.trim();

    if (!cleanedName) {
      alert("Please enter your name");
      return;
    }

    if (cleanedName.length < 2) {
      alert("Name should be at least 2 characters");
      return;
    }

    setProfile((prev) => ({ ...prev, name: cleanedName }));

    setIsModalOpen(false);
    navigate("/planner");
  }

  return (
    <div className="landing">
      <div className="landing__frame">
        <header className="landing__nav">
          <div className="landing__brand">
            <span className="landing__logoIcon">🍳</span>
            <span className="landing__logoText">CurryCraft</span>
          </div>

          <nav className="landing__navLinks">
            <button className="landing__navLinkBtn" onClick={openModal}>
              Login
            </button>

            <button className="landing__navBtn" onClick={openModal}>
              Signup
            </button>
          </nav>
        </header>

        <main className="landing__main">
          <div className="landing__hero">
            <div className="landing__heroLeft">
              <div className="landing__imageCard">
                <img className="landing__heroImage" src={`${import.meta.env.BASE_URL}saladbowl.png`} alt="Meal prep" />

              </div>
            </div>
            <div className="landing__heroRight">
              <h1 className="landing__title">
                Welcome to <br />
                <span className="landing__titleAccent">Easy & Healthy</span>
                <br />
                Meal Prep!
              </h1>

              <p className="landing__subtitle">
                Plan, prepare, and enjoy nutritious meals effortlessly.
              </p>

              <button className="landing__cta" onClick={openModal}>
                Get Started
              </button>
            </div>
          </div>
        </main>

        <footer className="landing__footer">
          <div className="landing__footerLeft">
            © 2026 MealPrep. All rights reserved.
          </div>

          <div className="landing__footerLinks">
            <a className="landing__footerLink" href="#">
              About
            </a>
            <a className="landing__footerLink" href="#">
              Privacy Policy
            </a>
            <a className="landing__footerLink" href="#">
              Terms of Service
            </a>
          </div>

          <div className="landing__social">
            <a className="landing__socialIcon" href="#">
              f
            </a>
            <a className="landing__socialIcon" href="#">
              t
            </a>
            <a className="landing__socialIcon" href="#">
              i
            </a>
          </div>
        </footer>
      </div>

      {isModalOpen && (
        <div
  className={`modalOverlay ${animateOpen ? "modalOverlay--open" : ""}`}
  onClick={closeModal}
>

          <div
  className={`modalCard ${animateOpen ? "modalCard--open" : ""}`}
  onClick={(e) => e.stopPropagation()}
>

            <div className="modalTop">
              <div>
                <h2 className="modalTitle">Setup your plan</h2>
                <p className="modalSub">
                  This profile will be used to generate meals + grocery list.
                </p>
              </div>

              <button className="modalClose" onClick={closeModal}>
                ✕
              </button>
            </div>

            <div className="modalForm">
              <div className="field">
                <label className="fieldLabel">Name</label>
                <input
                  value={profile.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="fieldInput"
                  placeholder="Your name"
                />
              </div>

              <div className="field">
                <label className="fieldLabel">Goal</label>
                <select
                  value={profile.goal}
                  onChange={(e) => update("goal", e.target.value)}
                  className="fieldInput"
                >
                  <option value="fat_loss">Fat loss</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="muscle_gain">Muscle gain</option>
                </select>
              </div>

              <div className="field">
                <label className="fieldLabel">Diet</label>
                <select
                  value={profile.diet}
                  onChange={(e) => update("diet", e.target.value)}
                  className="fieldInput"
                >
                  <option value="veg">Vegetarian</option>
                  <option value="eggetarian">Eggetarian</option>
                  <option value="nonveg">Non-veg</option>
                </select>
              </div>

              <button className="modalSaveBtn" onClick={handleSaveContinue}>
                Save & Continue
              </button>

              <div className="modalHint">
                Auto-saved: refresh the page and your values should stay.
              </div>

              <div className="modalTinyLinks">
                <Link to="/planner">Go Planner</Link>
                <Link to="/grocery">Go Grocery</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
