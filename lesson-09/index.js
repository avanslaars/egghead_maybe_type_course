const crocks = require('crocks')
const { Maybe, prop, safe, compose, chain, alt, map, option } = crocks
const { createUrl, isNonEmptyString } = require('./utils')

const article = {
  id: 1,
  name: 'Learn FP with this one weird trick'
}

const getSluggableName = compose(chain(safe(isNonEmptyString)), prop('name'))
const getUrlOrDefault = compose(option('default'), map(createUrl))
const getUrl = compose(getUrlOrDefault, getSluggableName)
const getUrlOrNope = compose(
  getUrlOrDefault,
  alt(Maybe.of('Nope')),
  getSluggableName
)
const getUrlOrWoops = compose(
  getUrlOrDefault,
  alt(Maybe.of('Woops')),
  getSluggableName
)

const url = getUrlOrWoops(article) /*?*/
