import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-gradient-to-b from-[#6A2B1F] to-[#2F0C06]">
      <div className="h-screen"></div>
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
