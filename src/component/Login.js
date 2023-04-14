import React, { useState } from 'react'
import "./css/login.css"
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { loginuser } from '../features/userSlice';

function Login() {
   const [signup ,setSignUp] = useState (false);
   const [name ,setName] = useState ("");
   const [photoURL ,setPhotoURL] = useState ("");
   const [email ,setEmail] = useState ("");
   const [password ,setPassword] = useState ("");

   const dispatch = useDispatch();

   const register =(e)=>{
    e.preventDefault();
    if(!name)
    {
      return alert("name is required.")
    }

    if(!photoURL)
    {
      return alert("photoURL is required.")
    }

    if(!email)
    {
      return alert("email is required.")
    }

    if(!password)
    {
      return alert("password is required.")
    }

    auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:name,
        photoURL:photoURL

      }).then(()=>{
        dispatch(loginuser({
          email:userAuth.user.email,
          uid:userAuth.user.uid,
          photoURL:photoURL,
          displayName:name

        }))

      })
    }).catch(error=>alert(error));



    setName("");
    setPhotoURL("");
    setEmail("");
    setPassword("");

    
   }
   const signIn=(e)=>{
    e.preventDefault();
    if(!email)
    {
      return alert("email is required.")
    }

    if(!password)
    {
      return alert("password is required.")
    }

    auth.signInWithEmailAndPassword(email,password).then((user)=>{
      dispatch(loginuser({
        email:user.email,
        uid:user.uid,
        photoURL:user.photoURL,
        displayName:user.displayName

      }))
    }).catch(error=>alert(error))
    }

   


  return (
    <>
    
    <div className ="loginScreen">
      <img src="data:image/png;base64,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"/>
       
         {
             signup===true ? (
             <form onSubmit={register}>
              <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)}/>
              <input type="text" placeholder="profile picture URL" value={photoURL} onChange={e=>setPhotoURL(e.target.value)}/>
              <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
              <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
      
              <input type="submit" value="Sign Up"/>
      
              <h4>Already a Member ?<span onClick={e=>setSignUp(false)}>Login Here</span></h4>
      
             </form>) 
             :
              ( 
              <form onSubmit={signIn}>
        
                <input type="email" placeholder="Email"  value={email}  onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
        
                <input type="submit" value="Sign In"/>
        
                <h4>Not a Member ?<span onClick={e=>setSignUp(true)}>Register Here</span></h4>
        
               </form>
               )
         }
       


      
    </div>
    </>
  )
}

export default Login

