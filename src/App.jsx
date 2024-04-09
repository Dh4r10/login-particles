import React from "react";
import InputLogin from "@/components/InputLogin";
import LoginImage from "./assets/img/login_image_2.jpg";
import Particles from "./components/particles/Particles";

import "./App.scss";

function App() {
  return (
    <>
      <Particles />
      <div
        className="login shadow-lg shadow-blue-950 h-full w-full"
        style={{ backgroundColor: "#003862" }}
      >
        <div className="login__input flex justify-center items-center">
          <InputLogin />
        </div>
        <div className="login__image h-full">
          <img src={LoginImage} alt="login" />
        </div>
      </div>
    </>
  );
}

export default App;
