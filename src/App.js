import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <React.Fragment>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        key={new Date()}
      />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/"
          element={
            <TextForm
              heading="Try TextUtils - word counter, character counter, remove extra spaces"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
