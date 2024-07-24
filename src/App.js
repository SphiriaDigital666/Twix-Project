import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Carousel />
      <HowToBuy />
      <Footer />
    </div>
  );
}

export default App;
