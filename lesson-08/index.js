const Maybe = require('crocks/Maybe')
const { createUrl, getDefaultPageUrl, getArticleName } = require('./utils')

const article = {
  id: 1,
  name: 'Learn FP with this one weird trick'
}

const abFlag = false
const getDefaultFromNothing = getDefaultPageUrl(abFlag) /*?*/

const url = getArticleName(article)
  .coalesce(getDefaultFromNothing, createUrl)
  .option('default') /*?*/
