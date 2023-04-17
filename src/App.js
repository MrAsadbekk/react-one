import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Dishes from "./components/dishes/Dishes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Dishes />
    </div>
  );
}

export default App;
