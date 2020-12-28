import "./App.css";
import Rules from "./Rules";
import SelectionBoard from "./SelectionBoard";
import TopBoard from "./TopBoard";
import "./scss/App.scss";

function App() {
  return (
    <div className="app">
      {/* scoreboard */}
      <TopBoard />

      {/* selection board */}
      <SelectionBoard />

      {/* rules modal button */}
      <Rules />
    </div>
  );
}

export default App;
