import React, { useEffect, useState } from 'react'
import  Avatar  from '@mui/material/Avatar'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import "./css/feed.css"
import Host from './Host'
import { db } from './firebase'
import firebase from "firebase"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {
  const user = useSelector(selectUser)

  const [posts, setPost] = useState([]);
  const [input, setInput] = useState();//react hook
const submitPost=(e)=>{
  e.preventDefault();
  db.collection("posts").add({
    name:user.displayName,
    description:"we are building project js",
    message:input,
    photoURL:user.photoURL,
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),



  });
  setInput("");
}

useEffect(() => {
     db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
   setPost(snapshot.docs.map(doc=>({
    id:doc.id,
    data:doc.data()
   })))
  })
}, [])

  console.log(posts);



  return (
    <div className="feed">
        <div className='feed_input'>
        <div className='feed_form'>

            <Avatar src={user.photoURL}/>
            <form onSubmit={submitPost}>
                <input type='text' placeholder='Start a post' value={input} onChange={e=>setInput(e.target.value)}></input>
                <input type='submit'/>

            </form>
            </div>

       
        <div className='feed_options'>
          <div className='option'>
            <PhotoSizeSelectActualIcon style={{color:'#7fc15e'}}/>
            <span>Photo</span>

          </div>
          <div className='option'>
            <YouTubeIcon style={{color:'#70b5f9'}}/>
            <span>Video</span>

          </div>
          <div className='option'>
            <EventIcon style={{color:'#e7a33e'}}/>
            <span>Event</span>

          </div>
          <div className='option'>
            <ArticleIcon style={{color:'#fc9295'}}/>
            <span>Write Artical</span>

          </div>

        </div>
        </div>
        <FlipMove>

        {
          posts.map(({id,data:{ name, description, message, photoURL}})=>{
            return <Host key={id} name={name} description={description}  message={message}  photoURL={photoURL}/>
         

          })

        }
        
        </FlipMove>    
        
    </div>
  )
}

export default Feed
