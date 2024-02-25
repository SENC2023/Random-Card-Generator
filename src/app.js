/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let generatedSymbol = generadorSymbol();
  document.getElementById("symbolTop").innerHTML = generatedSymbol;
  document.getElementById("number").innerHTML = generadorNumber();
  document.getElementById("symbolBottom").innerHTML = generatedSymbol;

  if (generatedSymbol === "♦" || generatedSymbol === "♥") {
    document.getElementById("symbolTop").classList.add("text-danger");
    document.getElementById("number").classList.add("text-danger");
    document.getElementById("symbolBottom").classList.add("text-danger");
  } else {
    document.getElementById("symbolTop").classList.add("text-dark");
    document.getElementById("number").classList.add("text-dark");
    document.getElementById("symbolBottom").classList.add("text-dark");
  }
};

let generadorSymbol = function() {
  let symbol = ["♦", "♥", "♠", "♣"];

  let symbolIndex = Math.floor(Math.random() * symbol.length);

  let card = symbol[symbolIndex];

  console.log(card);
  return card;
};

let generadorNumber = function() {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let numberIndex = Math.floor(Math.random() * number.length);

  let card = number[numberIndex];

  console.log(card);
  return card;
};
