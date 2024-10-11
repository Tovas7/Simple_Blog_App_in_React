import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';

const AddPostForm = () => {
    const[title,setTitle] =useState('');
    const[content,setContent] =useState('');
    const[userId,setUserId] =useState('');
    const dispatch=useDispatch();
    const users=useSelector(selectAllUsers);
    const ontiltleChanged = e => setTitle(e.target.value);
    const oncontentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);
    const onSavePostClicked =() =>{
        if(title && content){
            dispatch(
                postAdded(title,content,userId)
            )
            setTitle('');
            setContent('');
        }
    }
const canSave =Boolean(title) && Boolean(content) && Boolean(userId);

    const userOptions =users.map(user =>(
        <option value={user.id} id={user.id}>
            {user.name}
        </option>
    )) 
  return (
    <section className='Add-Post'>
        <h2>Add a New Post</h2>
        <form action="">
            <label htmlFor="postTitle">Post Title</label>
            <input type="text" id='postTitle'  name='postTitle'
            value={title} onChange={ontiltleChanged}/>
            <label htmlFor="postAuthor">Author:</label>
            <select name="postAuthor" id="postAuthor" value={userId} onChange={onAuthorChanged}>
                <option value=""></option>
                {userOptions}
            </select>
            <label htmlFor="postContent">Post Content</label>
            <textarea type="text" id='postContent'  name='postContent'
            value={content} onChange={oncontentChanged}/>
            <button 
            type='button' 
            onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm