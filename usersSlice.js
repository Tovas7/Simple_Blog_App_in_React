
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const USERS_URL = 'http://jsonplaceholder.typicode.com/users';

const initialState =[]


export const fetchUsers = createAsyncThunk('posts/fetchUsers', async ()=>{
    try {
      const response = await axios.get(USERS_URL);
      return[...response.data]

    } catch (error) {
        return error.Message;
    }
})
const usersSlice =createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled,(state,action) =>{
            return action.payload;
        })
    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;