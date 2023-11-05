import "./App.css";
import Quiz from "./Components/Quiz";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/03/23/12/42/360_F_323124237_SfGqpttZqU2mrMm61VPSWA2tKvc95l9O.jpg')",

        backgroundSize: "cover",
      }}
      className="d-flex align-items-center justify-content-center w-100"
    >
      <div
        className="col-lg-6 shadow rounded bg-slate-300 m-1 "
        style={{
          backgroundImage:
            'url("https://t3.ftcdn.net/jpg/03/08/21/72/360_F_308217222_SkOkOPhWtaAMNFw77Z0JVy4mPSgg4imN.jpg")',
          backgroundSize: "cover",
        }}
      >
        {" "}
        <Quiz />
      </div>
    </div>
  );
}

export default App;
