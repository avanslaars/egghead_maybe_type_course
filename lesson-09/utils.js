const crocks = require('crocks')
const { and, compose, isEmpty, isString, not } = crocks
const { join, split, toLower } = require('ramda')

const isNonEmptyString = and(not(isEmpty), isString)

const createUrlSlug = compose(join('-'), split(' '), toLower)
const buildUrl = slug => `https://egghead.io/articles/${slug}`
const createUrl = compose(buildUrl, createUrlSlug)

module.exports = {
  isNonEmptyString,
  createUrl
}
