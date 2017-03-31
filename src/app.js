"use strict"
import readlineSync from "readline-sync";
import HangMan from "./models/hangman";
import logger from "./libs/logger"

console.log('游戏开始');
let hangman = new HangMan();

while(hangman.hp > 0) {
  try {
    console.log(`你还有${hangman.hp}次机会`);
    let letter = readlineSync.question('请猜一个字母: ');
    hangman.guess(letter.toLowerCase());
    console.log(`单词：${hangman.word} `);
    if (hangman.isWin) {
      logger.info('user win');
      console.log('你赢了!');
    } else if (!hangman.isAlive) {
      console.log(`你输了= =, 答案是${hangman.protoWord}`);
    }
  } catch (e) {
    if (e.type === "HangManError") {
      console.log(e.chineseMsg);
    } else {
      throw e;
    }
  }
}
console.log("游戏结束");
