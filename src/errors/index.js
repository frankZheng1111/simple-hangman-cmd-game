"use strict"
let errorMsgs = require("../../config/errorMsgs.json");

class ExtendableError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.chineseMsg = errorMsgs[this.message];
    this.stack = (new Error()).stack;
    this.name = this.constructor.name;
  }
}

class HangManError extends ExtendableError {
  constructor(m) {
    super(m);
    this.type = 'HangManError';
  }
}
export { HangManError }

