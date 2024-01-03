const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions

console.log('Estado inicial: ', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Estado atualizado: ', store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(5))
unsubscribe()

