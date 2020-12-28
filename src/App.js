import "./App.css";
import Rules from "./Rules";
import SelectionBoard from "./SelectionBoard";
import TopBoard from "./TopBoard";

function App() {
  return (
    <div className="app">
      <h1>Hello BlessTheBoy</h1>
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
