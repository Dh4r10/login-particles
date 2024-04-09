import React from "react";
import FormInput from "./FormInput";
import LogoCiencias from "../assets/img/logo_ciencias.webp";

function InputLogin() {
  return (
    <div className="login__input-fields">
      <div className="login__input-fields-header flex justify-between mb-10">
        <a href="https://www.iepciencias.edu.pe/" target="_blank">
          <img src={LogoCiencias} alt="logo-ciencias" />
        </a>
        <div className="flex justify-center items-center">
          <h1>GESTIÓN EDUCATIVA DE PROCESOS DE PAGO</h1>
        </div>
      </div>
      <FormInput />
    </div>
  );
}

export default InputLogin;
