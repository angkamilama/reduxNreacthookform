

import { createSlice } from "@reduxjs/toolkit";

const randomCountrySlice = createSlice({
    name: 'country',
    initialState:[],
    reducers: {
        addCountry(state, action) {
            state.push(action.payload);        
            
        }
    }
})

export const {addCountry} = randomCountrySlice.actions;
export default randomCountrySlice;