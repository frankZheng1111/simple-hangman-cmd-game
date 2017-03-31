"use strict"
import readlineSync from "readline-sync";
import HangMan from "./models/hangman";

import logger from "./libs/logger"


console.log('Game start ~');

let userName = readlineSync.question('May I have your name? ');

let hangman = new HangMan();

try {
  hangman.guess('adasd');
} catch (e) {
  console.log(e.type);
  console.log(e.message);
  console.log(e.chineseMsg);
  console.log(e.stack);
}

console.log(`Hi ${userName}~`);
