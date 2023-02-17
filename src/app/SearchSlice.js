import { createSlice } from "@reduxjs/toolkit";

const initialState = {from : "" , to : ""};

const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        // searchFlights: (state, action) =>{
        //     state.data = [...action.payload]

        // },
        fromToSetInRedux: (state, action) =>{
           state.from = action.payload.from;
           state.to = action.payload.to;

        },
    
    }
})

export const { fromToSetInRedux} = SearchSlice.actions;
export default SearchSlice.reducer;
