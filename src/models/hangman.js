"use strict"
import { HangManError } from '../errors';
import logger from "../libs/logger"

class HangMan {
  constructor() {
    this.protoWord = "laevatein".toLowerCase();
    this.word = this.protoWord.replace(/[a-z]/g, '*');
    this.wordLetters = this.protoWord.split("");
    this.guessedLetters = [];
    this.hp = 10;
    logger.debug(`Generate a word: ${this.protoWord}`)
 
  }

  guess(letter) {
    if (letter !== letter.toLowerCase()) { throw new HangManError("input.upper.case.letter"); }
    if (letter.length > 1) { throw new HangManError("input.multi.letters"); }
    if (letter.length < 1) { throw new HangManError("input.nothing"); }
    if (this.guessedLetters.includes(letter)) { throw new HangManError("input.guessed.letter"); }
    logger.debug(`User guess letter ${letter.toLowerCase()}`)
    logger.debug(`Current Hp ${this.hp}`)
    this.guessedLetters.push(letter);
    if (!this.wordLetters.includes(letter)) { this.hp--; }
    this.word = this.wordLetters.map((letter) => {
      if (this.guessedLetters.includes(letter)) {
        return letter;
      } else {
        return "*";
      }
    }).join('');
    return this.word;
  }

  isAlive() {
    return (this.hp > 0);
  }

  isWin() {
    return !this.word.split('').includes('*');
  }
}

export default HangMan;
