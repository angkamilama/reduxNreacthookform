import { createSlice } from "@reduxjs/toolkit";



const RandomNameSlice  = createSlice({
    name: 'ang',
    initialState: '',
    reducers:{
        addName(state, action ) {
            state.push(action.payload)
        }
    }
  } 
)

export default RandomNameSlice;

export const {addName} = RandomNameSlice.actions;