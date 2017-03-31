"use strict"
class HangManError extends Error {
  constructor () {
    super(arguments);
    this.chineseMsg = "测试";
  }
}

export { HangManError }

