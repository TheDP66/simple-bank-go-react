import "./App.css";
import logo from "./logo.svg";
import { loginUser } from "./service/authAction";
import { createUser } from "./service/userAction";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={loginUser}>gRPC Login</button>
        <button onClick={createUser}>gRPC CreateUser</button>
      </header>
    </div>
  );
}

export default App;
