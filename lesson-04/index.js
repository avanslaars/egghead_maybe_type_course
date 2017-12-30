const prop = require('crocks/Maybe/prop')
// const safe = require('crocks/Maybe/safe')
// const { compose, isNil, not } = require('ramda')
const { inc } = require('../utils')

// const isNotNil = compose(not, isNil)

const qs = { page: 4, pageSize: 10, totalPages: 203 }

// const prop = (propName, obj) => safe(isNotNil, obj[propName])

const safePage = prop('page')
const page = safePage(qs)
const nextPage = page.map(inc).option(1) /*?*/
