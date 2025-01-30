import { configureStore } from "@reduxjs/toolkit";
import CounterRd from "./createSlice.jsx"
const store = configureStore({
    reducer:{
        
            counter:CounterRd
        
    }
})
 export default store 