const propPath = require('crocks/Maybe/propPath')

const user = {
  username: 'tester',
  email: 'test@gmail.com',
  address: {
    street: '111 E. West St',
    city: 'Anywhere',
    state: 'PA',
    postalCode: '19123-4567'
  }
}

const getPostalCode = propPath(['address', 'postalCode'])
const zip = getPostalCode(user).option('not available') /*?*/
