const store = require('./app/store')
const { iceCreamActions } = require('./features/iceCream/iceCreamSlice')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('Estado inicial: ', store.getState())
const unsubscribe = store.subscribe(() => {})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(5))
// store.dispatch(iceCreamActions.ordered(5))
// store.dispatch(iceCreamActions.ordered(6))
// store.dispatch(iceCreamActions.ordered(9))
// store.dispatch(iceCreamActions.restocked(20))
// store.dispatch(cakeActions.ordered())

// unsubscribe()

