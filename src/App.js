import "./App.css";
import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="container">
      <Info className="message" message="Calling..." />
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard
            className="keyboard"
            actionOnClick={() => console.log("key!")}
          />
        </div>
        <Actions
          actionOnClickCall={() => console.log("call!")}
          actionOnClickHang={() => console.log("hang!")}
        />
      </main>
    </div>
  );
}

export default App;
