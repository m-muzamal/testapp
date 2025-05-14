import Home from "./Componenets/Home";
import FormHandling from "./Componenets/useForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="useForm" element={<FormHandling />} />
      </Routes>
    </Router>
  );
}

export default App;
