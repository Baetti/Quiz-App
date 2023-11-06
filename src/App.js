import { Route, Routes } from "react-router-dom";
import "./App.css";
import Quiz from "./Components/Quiz";
import Landing from "./Components/Landing";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://img.freepik.com/free-vector/atomic-science-technology-background-vector-border-blue-neon-style-with-blank-space_53876-125999.jpg?w=1060&t=st=1699267626~exp=1699268226~hmac=864889b345b9fdc8b91cd96c5c3735bb5301860a4420bdeb966550049454ab23')",

        backgroundSize: "cover",
      }}
      className="d-flex align-items-center justify-content-center w-100"
    >
      <div
        className="col-lg-6 shadow rounded bg-slate-300 m-1 w-75 "
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/1341408852/video/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke.jpg?s=640x640&k=20&c=v2DQUY8IVbli_6FH_9KAs6YWRXlDdYiBJHfp7JFh7NY=")',
          backgroundSize: "cover",
        }}
      >
        {" "}
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/game" element={<Quiz />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
