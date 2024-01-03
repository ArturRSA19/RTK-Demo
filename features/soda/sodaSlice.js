const { cakeActions } = require('../cake/cakeSlice')
const { iceCreamActions } = require('../iceCream/iceCreamSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfSodas: 100
}

const sodaSlice = createSlice({
  name: 'soda',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfSodas -= action.payload
    },
    restocked: (state, action) => {
      state.numOfSodas += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, state => {
        state.numOfSodas--
    })
    builder.addCase(iceCreamActions.ordered, state => {
        state.numOfSodas--
    })
  },
})

module.exports = sodaSlice.reducer
module.exports.sodaActions = sodaSlice.actions
