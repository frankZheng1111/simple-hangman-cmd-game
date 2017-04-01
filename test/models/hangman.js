import { should as _should } from "chai"
import HangMan from "../../src/models/hangman"

let should = _should();

describe("Test HangMan Class", () => {
  let hangman = {}
  beforeEach(() => {
    hangman = new HangMan();
  });

  describe("test constructor", () => {
    it("should return hp", () => {
      hangman.hp.should.equal(10);
    });

    it("word length should equal protoWord length", () => {
      hangman.protoWord.length.should.equal(hangman.word.length);
    });

    it("guessWords should be empty", () => {
      hangman.guessedLetters.length.should.equal(0);
    });
  });

  describe("judge whether win", () => {
    it("should return true", () => {
      hangman.word = "aaa";
      hangman.isWin().should.equal(true);
    });

    it("should return false", () => {
      hangman.word = "***";
      hangman.isWin().should.equal(false);
    });
  });

  describe("judge whether Alive", () => {
    it("should return true", () => {
      hangman.isAlive().should.equal(true);
    });

    it("should return false", () => {
      hangman.hp = 0;
      hangman.isAlive().should.equal(false);
    });
  });

  describe("test guess word", () => {
    it("should throw exception", () => {
      (() => { hangman.guess("R") }).should.throw(Error, /input.upper.case.letter/);
      (() => { hangman.guess("ww") }).should.throw(Error, /input.multi.letters/);
      (() => { hangman.guess("") }).should.throw(Error, /input.nothing/);
      hangman.guess("w");
      (() => { hangman.guess("w") }).should.throw(Error, /input.guessed.letter/);
    });

    it("should return *e**", () => {
      hangman = new HangMan("test");
      hangman.guess("e").should.equal("*e**");
    });
  });


});
