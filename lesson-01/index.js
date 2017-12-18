const { inc } = require('../utils')
const Maybe = require('crocks/Maybe')

// Maybe = Just x | Nothing

const safeNum = val =>
  typeof val === 'number' ? Maybe.Just(val) : Maybe.Nothing()

const input = safeNum(2)
const result = input.map(n => console.log('calling inc') || inc(n))

console.log(result)
