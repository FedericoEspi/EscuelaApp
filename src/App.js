import { Route } from "react-router-dom";
import "./App.css";
import { Loguin } from "./componnents/Loguin.js";
import { UserRegister } from "./componnents/UserRegister.js";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <UserRegister />
    </div>
  );
}

export default App;
