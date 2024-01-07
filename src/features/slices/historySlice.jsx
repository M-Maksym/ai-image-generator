import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
    name: 'history',
    initialState: {
        history: [],
        amount: 0,
        totalAmount: 0,
    },
    reducers:{
        addToHistory(state, action){
            const image = action.payload;
            try{
                state.history.push({
                    amount: 1,
                    url: image.url,
                    text: image.text,
                })
                state.totalAmount++;
                console.log(state.history);
            }catch(err){
                return err;
            }
        }
    }
})

export const {addToHistory} = historySlice.actions;
export default historySlice.reducer;