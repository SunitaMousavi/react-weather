import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer className="text-center">
        Coded by{" "}
        <a
          href="https://github.com/SunitaMousavi"
          target="_blank"
          rel="noopener noreferrer">
          Sunita Mousavi
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/SunitaMousavi/react-weather"
          target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://reactweatherapp-sunitamousavi.netlify.app"
          target="_blank"
          rel="noopener noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  );
}
