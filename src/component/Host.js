import React, { forwardRef , useState } from 'react'
import  Avatar  from '@mui/material/Avatar'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./css/post.css"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';



const Host = forwardRef(({name, description, message, photoURL}, ref)=> {
  const [liked, setLiked] = useState(false);
  //const [numLikes, setNumLikes] = useState(0)
  const [comments, setComments] = useState([])

  const handleLike = () => {
    //setNumLikes(numLikes + 1)
    setLiked(!liked)
  }

  const handleCommentSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const comment = formData.get('comment')
    setComments([...comments, comment])
    event.target.reset()
  }

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
        <div className='post_footer_option' onClick={handleLike}>
        <ThumbUpAltIcon style = {{ color: liked ? 'blue' : 'gray' }}/>
        <span>Like</span>

            </div>
            <div className='post_footer_option'>
        <CommentIcon/>
        <span>({comments.length}) comment</span>

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
      <div className='post_comments'>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
        <form onSubmit={handleCommentSubmit}>
          <input type='text' name='comment' id="comment-input"  placeholder='Add a comment'/>
          <button type='submit'id="comment-btn" >Post</button>
        </form>
      </div>
      
    </div>
  )})



export default Host
