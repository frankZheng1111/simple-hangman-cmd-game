"use strict"
import fs from "fs"
import { HangManError } from "../errors";
import logger from "../libs/logger"

class HangMan {
  constructor(customProtoWord) {
    let _dictionary = [];
    if (!customProtoWord) { _dictionary = fs.readFileSync("dictionary.txt").toString().split("\n"); }
    this.protoWord = (customProtoWord || _dictionary[Math.floor(Math.random() * _dictionary.length)]).toLowerCase();
    this.word = this.protoWord.replace(/[a-z]/g, "*");
    this.wordLetters = this.protoWord.split("");
    this.guessedLetters = [];
    this.hp = 10;
    logger.info(`Generate a word: ${this.protoWord}`)
 
  }

  guess(letter) {
    if (letter !== letter.toLowerCase()) { throw new HangManError("input.upper.case.letter"); }
    if (letter.length > 1) { throw new HangManError("input.multi.letters"); }
    if (letter.length < 1) { throw new HangManError("input.nothing"); }
    if (this.guessedLetters.includes(letter)) { throw new HangManError("input.guessed.letter"); }
    logger.info(`User guess letter ${letter.toLowerCase()}`)
    logger.info(`Current Hp ${this.hp}`)
    this.guessedLetters.push(letter);
    if (!this.wordLetters.includes(letter)) { this.hp--; }
    this.word = this.wordLetters.map((letter) => {
      if (this.guessedLetters.includes(letter)) {
        return letter;
      } else {
        return "*";
      }
    }).join("");
    return this.word;
  }

  isAlive() {
    return (this.hp > 0);
  }

  isWin() {
    return !this.word.split("").includes("*");
  }
}

export default HangMan;
