
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer"

function App() {
  return (
    <div className="font-Lato">
      <Header />
      <HashRouter>
        {" "}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;