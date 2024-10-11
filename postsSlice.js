
    import { createSlice, nanoid , createAsyncThunk } from "@reduxjs/toolkit";
    import { sub } from "date-fns";
    import axios from "axios";
import { act } from "react";

    const POSTS_URL ='https://jsonplaceholder.typicode.com/posts';
    const initialState={
        posts:[],
        status:'idle',
        error:null
    }

     export const fetchPosts = createAsyncThunk('posts/fetchPosts',async () =>{
        try {
            const response = await axios.get(POSTS_URL);
            return [...response.data];
        } catch (err) {
            return err.Message;
        }
    })

    export const addNewPost = createAsyncThunk('posts/addNewPost',async (initialPost) =>{
        try {
            const response = await axios.get(POSTS_URL,initialPost);
            return [...response.data];
        } catch (err) {
            return err.Message;
        }
    })

    const postsSlice=createSlice({
        name:'posts',
        initialState,
        reducers:{
            postAdded:{
                reducer(state,action){
                    state.posts.push(action.payload)
            },
            prepare(title,content,userId){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId
                    }
                }
            },

        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchPosts.pending,(state,action) =>{
            state.status='loading'
        })
        .addCase(fetchPosts.fulfilled,(state, action) =>{
            state.status='succeeeded'
            console.log(action.meta)
                // const y=action.meta.requestId;
                // const z=y.
            //  const LoadedPosts = action.meta.map(post =>(
            //     post.date = sub(new Date(),{ minutes: min++}).toISOString()
            //   ) )
            // state.posts = state.posts.concat(LoadedPosts);
        })
        .addCase(fetchPosts.rejected,(state,action) =>{
            state.status='failed'
            state.error = action.error.message;
        })   
    }
}) 

    export const selectAllPosts = (state) => state.posts.posts;
    export const getPostsStatus = (state) => state.posts.status;
    export const getPostsError = (state) => state.posts.error;

    export const selectPostById = (state,postId) =>{
        state.posts.posts.find(post => post.id === postId)
    }
    export const {postAdded} =postsSlice.actions;

    export default postsSlice.reducer 