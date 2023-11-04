import "./App.css";
import Quiz from "./Components/Quiz";

function App() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex align-items-center justify-content-center w-100"
    >
      <div className="col-lg-6 shadow rounded bg-slate-300 ">
        {" "}
        <Quiz />
      </div>
    </div>
  );
}

export default App;
