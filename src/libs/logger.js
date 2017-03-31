"use strict"
import log4js from "log4js";

log4js.configure({
  appenders: [
    {
      type: "logLevelFilter",
      level: "WARN",
      appender: {
        type: "console",
      }
    }, //控制台输出
    {
      type: "logLevelFilter",
      level: "DEBUG",
      appender: {
        type: "dateFile", //文件输出
        filename: "log/hangman",
        alwaysIncludePattern: true,
        pattern: "-yyyy-MM-dd.log",
        category: "normal"
      }
    }
  ],
  // replaceConsole: true
});

let logger = log4js.getLogger("normal");

export default logger;
