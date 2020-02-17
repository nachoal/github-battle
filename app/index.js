import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
// Component:
// State: Has a state that it manages (data) and it manages it's own state
// Lifecycle: fetch data ƒrom an api, etc
// UI - What the UI is going to look like, redenr is the description of what the UI is going to look like
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Battle />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
