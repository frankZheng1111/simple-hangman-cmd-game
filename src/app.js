"use strict"
import readlineSync from "readline-sync";

import logger from "./lib/logger"

let userName = readlineSync.question('May I have your name? ');

console.log('Game start ~');
console.log(`Hi ${userName}~`);
