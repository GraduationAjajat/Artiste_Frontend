import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./components/Header";
import { useEffect } from "react";
import { onRefresh } from "./components/utils";
function App() {
  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("refresh")) {
      onRefresh();
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
