/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let persona = ["María", "Julio", "Luis", "Ángela"];
  let accion = ["comerá", "jugará", "dormirá", "correrá"];
  let donde = ["en la sala", "en la calle", "en la cocina", "en el comedor"];
  let cuando = [
    "el lunes",
    "el martes",
    "el miércoles",
    "el jueves",
    "el viernes"
  ];

  function createAleatoryElement(array) {
    return Math.floor(Math.random() * array.length);
  }

  let personaIndex = createAleatoryElement(persona);
  let accionIndex = createAleatoryElement(accion);
  let dondeIndex = createAleatoryElement(donde);
  let cuandoIndex = createAleatoryElement(cuando);

  document.getElementById("result").innerHTML =
    persona[personaIndex] +
    " " +
    accion[accionIndex] +
    " " +
    donde[dondeIndex] +
    " " +
    cuando[cuandoIndex];
};
console.log("Hello Rigo from the console!");
