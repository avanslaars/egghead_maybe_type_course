const { inc, toUpper } = require('../utils')
const Maybe = require('crocks/Maybe')
const safe = require('crocks/Maybe/safe')
const isNumber = require('crocks/predicates/isNumber')
const isString = require('crocks/predicates/isString')

const safeNum = safe(isNumber)

const inputN = safeNum(5)
const resultN = inputN.map(inc)

const inputS = safe(isString, 'test')
const resultS = inputS.map(toUpper)

console.log(resultN)
console.log(resultS)
