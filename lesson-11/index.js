const crocks = require('crocks')
const { isNumber, safe, safeLift } = crocks
const { dbl } = require('../utils')

const input = 2
// const safeDbl = n => safe(isNumber, n).map(dbl)
const safeDbl = safeLift(isNumber, dbl)

const result = safeDbl(input).option(0) /*?*/
