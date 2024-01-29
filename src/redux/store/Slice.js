import {createSlice} from '@reduxjs/toolkit'
export const Slice=createSlice({
    name:"taskmanage",
    initialState:{
        isAuth:false,
        isEdit:false,
        // arr:JSON.parse(localStorage.getItem("account"))
        arr:[]
    },
    reducers:{
        update:(state,action)=>{
            state.arr=action.payload
        },
        updateAuth:(state,action)=>{
            state.isAuth=action.payload
        }
    }
})
export default Slice.reducer;
export const {update,updateAuth}=Slice.actions;