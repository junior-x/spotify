import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <div className="navBar">
          <div className="Logo">Logo</div>
          <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Your Library</li>
          </ul>
        </div>
      </div>
    <div nameClass="musicControls">music controls</div>
    </div>
  );
}

export default App;
