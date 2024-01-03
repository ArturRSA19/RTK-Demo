const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfIceCreams: 50
}

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCreams -= action.payload
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, state => {
        state.numOfIceCreams--
    })
  },
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions
