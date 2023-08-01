import { configureStore } from "@reduxjs/toolkit";  
import randomCountrySlice from "../slices/randomCountrySlice";
import myDataSlice from "../slices/myDataSlice";



const store = configureStore({
    reducer: {
        country: randomCountrySlice.reducer,
        myData: myDataSlice.reducer
    }
})


export default store;



