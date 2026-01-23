// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Onboarding from "./pages/Onboarding";
// // import Planner from "./pages/Planner";
// // import Grocery from "./pages/Grocery";

// // export default function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Onboarding />} />
// //         <Route path="/planner" element={<Planner />} />
// //         <Route path="/grocery" element={<Grocery />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landing from "./pages/Landing";
// import Onboarding from "./pages/Onboarding";
// import Planner from "./pages/Planner";
// import Grocery from "./pages/Grocery";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/onboarding" element={<Onboarding />} />
//         <Route path="/planner" element={<Planner />} />
//         <Route path="/grocery" element={<Grocery />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Planner from "./pages/Planner";
import Grocery from "./pages/Grocery";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Landing />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/grocery" element={<Grocery />} />
      </Routes>
    </BrowserRouter>
  );
}
