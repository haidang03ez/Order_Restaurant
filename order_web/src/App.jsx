import Header from "./component/headerComponent/header";
import Footer from "./component/footerComponent/footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./screen/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
