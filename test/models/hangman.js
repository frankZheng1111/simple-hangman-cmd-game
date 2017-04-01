import { should as _should } from 'chai'
import HangMan from '../../src/models/hangman'

let should = _should();

describe('Test HangMan Class', () => {
  let hangman = {}
  beforeEach(() => {
    hangman = new HangMan();
  });

  describe('test constructor', () => {
    it('should return hp', () => {
      hangman.hp.should.equal(10);
    });

    it('word length should equal protoWord length', () => {
      hangman.protoWord.length.should.equal(hangman.word.length);
    });

    it('guessWords should be empty', () => {
      hangman.guessedLetters.length.should.equal(0);
    });
  });

  describe('judge whether win', () => {
    it('should return true', () => {
      hangman.word = "aaa";
      hangman.isWin().should.equal(true);
    });

    it('should return false', () => {
      hangman.word = "***";
      hangman.isWin().should.equal(false);
    });
  });

  describe('judge whether Alive', () => {
    it('should return true', () => {
      hangman.isAlive().should.equal(true);
    });

    it('should return false', () => {
      hangman.hp = 0;
      hangman.isAlive().should.equal(false);
    });
  });

});

