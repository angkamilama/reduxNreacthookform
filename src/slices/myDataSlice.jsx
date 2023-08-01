import { createSlice } from "@reduxjs/toolkit"

const myDataSlice = createSlice({
    name: 'myData',
    initialState: [],
    reducers: {
        addData(state, action) {
            state.push(action.payload);
        }
    }
})

export default myDataSlice;
export const {addData} = myDataSlice.actions;
