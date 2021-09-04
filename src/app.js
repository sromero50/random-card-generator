/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".number").innerHTML = numeroRandom();

  let top = document.querySelector(".top");
  let bottom = document.querySelector(".bottom");
  top.innerHTML = simbolosRandom();
  bottom.innerHTML = top.innerHTML;

  if (bottom.innerHTML === "♥") {
    return document.querySelector(".card").classList.add("heart");
  } else if (bottom.innerHTML === "♦") {
    return document.querySelector(".card").classList.add("diamond");
  } else if (bottom.innerHTML === "♠") {
    return document.querySelector(".card").classList.add("spade");
  } else if (bottom.innerHTML === "♣") {
    return document.querySelector(".card").classList.add("club");
  }
};

let numeroRandom = () => {
  let numero = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J"
  ];
  let index = Math.floor(Math.random() * numero.length);
  return numero[index];
};

let simbolosRandom = () => {
  let simbolo = ["♦", "♥", "♠", "♣"];
  let index2 = Math.floor(Math.random() * simbolo.length);
  return simbolo[index2];
};

// Función para ejercicios extras--------------------------------------------------------

function cardGenerator() {
  document.querySelector(".number").innerHTML = numeroRandom();

  let top = document.querySelector(".top");
  let bottom = document.querySelector(".bottom");
  top.innerHTML = simbolosRandom();
  bottom.innerHTML = top.innerHTML;

  if (bottom.innerHTML === "♥") {
    document.querySelector("div").classList.remove("diamond");
    document.querySelector("div").classList.remove("spade");
    document.querySelector("div").classList.remove("club");
    return document.querySelector(".card").classList.add("heart");
  } else if (bottom.innerHTML === "♦") {
    document.querySelector("div").classList.remove("heart");
    document.querySelector("div").classList.remove("spade");
    document.querySelector("div").classList.remove("club");
    return document.querySelector(".card").classList.add("diamond");
  } else if (bottom.innerHTML === "♠") {
    document.querySelector("div").classList.remove("diamond");
    document.querySelector("div").classList.remove("heart");
    document.querySelector("div").classList.remove("club");
    return document.querySelector(".card").classList.add("spade");
  } else if (bottom.innerHTML === "♣") {
    document.querySelector("div").classList.remove("diamond");
    document.querySelector("div").classList.remove("spade");
    document.querySelector("div").classList.remove("heart");
    return document.querySelector(".card").classList.add("club");
  }
}

// Boton new card--------------------------------------------------------

window.prueba = function prueba() {
  let newCard = document.querySelector("#new");
  newCard.addEventListener("click", cardGenerator());
};

// Timer 10 secs----------------------------------------------------------
setInterval(cardGenerator, 10000);

// ----------------------------------------------------------
