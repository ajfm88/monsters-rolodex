import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "12e1231e",
        },
        {
          name: "Frank",
          id: "12352f4er",
        },
        {
          name: "Jacky",
          id: "1234feqd34",
        },
        {
          name: "Andrei",
          id: "3214r4fcre",
        },
        {
          name: "Frank",
          id: "23r1f",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monsters) => {
          return (
            <div key={monsters.id}>
              <h1>{monsters.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
