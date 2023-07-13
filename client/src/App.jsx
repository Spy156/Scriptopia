import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import "./assets/normalize.css";
import Code from "./pages/Code/Code";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth/>} />
          <Route path="/code/*" element={<Code />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
