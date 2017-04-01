"use strict"
let env = process.env.NODE_ENV || "dev"
let base = require("../../config/base.json")[env];

export default { base }
