
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import ExploreServices from "./pages/services";
import BookService from "./pages/booking";


function App() {
  return (
    <HashRouter>
      <div className="font-Lato">
        <Header />{" "}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/services" element={<ExploreServices />} />
          <Route path="/booking" element={<BookService />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;