import { useContext } from "react";
import ThemeContext from "./context/theme.context";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/components/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={`App-${dark ? "dark" : ""}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
