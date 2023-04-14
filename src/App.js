import React, { useEffect } from 'react';
import Feed from './component/Feed';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Widget from './component/Widget';
import Login from './component/Login';
import { loginuser, logoutuser, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './component/firebase';



function App() {
  const user = useSelector(selectUser) ;
const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(loginuser({
          email:userAuth.email,
        uid:userAuth.uid,
        photoURL:userAuth.photoURL,
        displayName:userAuth.displayName

        }))

      }
      else{
        dispatch(logoutuser())
        

      }
    })

  },

  [])

  return (
    <>
    {
      !user ?(<Login/> ):(
        <div className="app_wrapper">
      <Header/>
      <div className="app_body">
        <Sidebar/>
        <Feed/>
        <Widget/>


      </div>

    </div>
      )
    }

    
    </>
  );
}

export default App;
