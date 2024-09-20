import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import CheckoutPage from "./Pages/CheckoutPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
