const propPath = require('crocks/Maybe/propPath')
const { getUser } = require('./service')

const getPostalCode = propPath(['address', 'postalCode'])

getUser(1)
  .then(res => res.chain(getPostalCode))
  .then(console.log)
