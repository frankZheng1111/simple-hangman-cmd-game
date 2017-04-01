import { should as _should } from 'chai'
import HangMan from '../../src/models/hangman'

let should = _should();

describe('Test HangMan Class', () => {
  let hangman = {}
  before(() => {
    hangman = new HangMan();
  });

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

exports.covered = {
    'is bar': () => assert.equal(covered, 'bar'),
}
