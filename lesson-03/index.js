const safe = require('crocks/Maybe/safe')
const isNumber = require('crocks/predicates/isNumber')
const { inc, dbl } = require('../utils')

const incDbl = n => {
  const incremented = inc(n)
  return dbl(incremented)
}

const result = incDbl(2)
console.log(result)
