"use strict"
import { HangManError } from '../errors';

class HangMan {
  constructor() {
    this.word = "laevatein";
    this.wordLetters = this.word.split("");
    this.guessedLetters = [];
    this.hp = 10;
  }

  guess(letter) {
    throw new HangManError("input.guessed.letter");
  }
}

export default HangMan;
