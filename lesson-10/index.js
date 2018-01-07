const crocks = require('crocks')
const { Maybe, isNumber, safe, liftA2 } = crocks

const safeNum1 = safe(isNumber, 1)
const safeNum2 = safe(isNumber, 2)

const add = a => b => a + b

// safeAdd using `ap`
// const safeAdd = Maybe.of(add)
// safeAdd
//   .ap(safeNum1)
//   .ap(safeNum2) /*?*/

// safeAdd using liftA2
const safeAdd = liftA2(add)
safeAdd(safeNum1, safeNum2) /*?*/
