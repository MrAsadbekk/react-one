import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Dishes from "./components/dishes/Dishes";
import Menu from "./components/menu/Menu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Dishes />
      <Menu />
    </div>
  );
}

export default App;
