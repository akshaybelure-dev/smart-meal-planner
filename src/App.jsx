import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Planner from "./pages/Planner";
import Grocery from "./pages/Grocery";

export default function App() {
  return (
    <BrowserRouter basename="/smart-meal-planner">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Landing />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/grocery" element={<Grocery />} />
      </Routes>
    </BrowserRouter>
  );
}
