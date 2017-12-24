const safe = require('crocks/Maybe/safe')
const isNumber = require('crocks/predicates/isNumber')
const compose = require('crocks/helpers/compose')
const { inc, dbl } = require('../utils')

const incDbl = n =>
  safe(isNumber, n)
    .map(compose(dbl, inc))
    .option(0)

const result = incDbl(2)
console.log(result)
