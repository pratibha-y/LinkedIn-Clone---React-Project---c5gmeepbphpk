import React from 'react'
import "./css/sidebar.css"
import  Avatar  from '@mui/material/Avatar'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function Sidebar() {
    const user = useSelector(selectUser)
  return (
    <div className="sidebar">
        <div className="sidebar_profile">
            <img src= "https://img.freepik.com/free-vector/blurred-valentine-s-day-wallpaper_23-2148819570.jpg?w=2000"/>
            <div className="profile_details">
                <Avatar src={user.photoURL} />
                <h4>
                   {user.displayName}
                </h4>
                <p>web developer</p>

            </div>
            <div className="profile_stats">
                
                <span>
                    who veiwed your prfile
                </span>
                <span className="stat_number">20</span>
                </div>
            <div className="profile_stats">
            <span>
                    Connection<br></br>
                    <b>Grow Your Network</b></span>
                    <span className="Stat_number">150</span>

                
                </div>
           
        </div>
        <div className='sidebar_recent'>
            <p>Recent</p>
            <p className="hash"><span>#</span> branding </p>
            <p className='hash'><span>#</span>mar</p>
            <p className="hash"><span>#</span>webdeveloping</p>
            <p className="hash"><span>#</span> programing </p>
            <p className="hash"><span>#</span> reactjs </p>
            <p className="hash"><span>#</span> reduxtoolkit</p>
            

        </div>
      
    </div>
  )
}

export default Sidebar
