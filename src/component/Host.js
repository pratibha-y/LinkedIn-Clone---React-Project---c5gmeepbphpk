import React, { forwardRef } from 'react'
import  Avatar  from '@mui/material/Avatar'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./css/post.css"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';



const Host = forwardRef(({name, description, message, photoURL}, ref)=> {
  return (
    <div className='posts' ref={ref}> 
    <div className='post_header'>
        <div className='post_headerLeft'>
            <Avatar src={photoURL}/>
            <div className='post_profile_details'>
                <h3>{name}</h3>
                <p>w{description}</p>

            </div>

        </div>
        <MoreVertIcon/>
        
    </div>
    <div className='post_body'>
        <p> {message}</p>
      </div>
      <div className='post_footer'>
        <div className='post_footer_option'>
        <ThumbUpAltIcon/>
        <span>Like</span>

            </div>
            <div className='post_footer_option'>
        <CommentIcon/>
        <span>comment</span>

            </div>
            <div className='post_footer_option'>
        <ShareIcon/>
        <span>share</span>

            </div>
            <div className='post_footer_option'>
        <SendIcon/>
        <span>send</span>

            </div>
            
      </div>
      
    </div>
  )})



export default Host
