import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './LoginForm.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../FirebaseConfig/FirebaseConfig';
import { UserContext } from '../../App';
import fbLogo from '../Image/fb.png'
import googleLogo from '../Image/google.png'


if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const LoginForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location =useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: ''
    })


    const handleGoogleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const user = result.user; 
            setUser(user);
            setLoggedInUser(user);
            history.replace(from);
          }).catch(function(error) {
           
          });
    }

    const handleFacebookLogin = () => {
        var FbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(FbProvider).then(function(result) {
            const user = result.user;  
            setUser(user);
            setLoggedInUser(user);
            history.replace(from);
          }).catch(function(error) {
          
          });
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\D+/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
      
        if(isFieldValid){
            const newUserInfo ={...user}
            newUserInfo[e.target.name ]= e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if(newUser && user.email && user.password ){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const user = res.user;
                setUser(user);
                setLoggedInUser(user);
                updateUserName(user.name);
                history.replace(from);
            })
            .catch( error => {
                
            });
        }
        if(!newUser && user.email && user.password ){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const user = res.user;
                setUser(user);
                setLoggedInUser(user);
                history.replace(from);
            })
            .catch(error => {
             
              });
        }
             e.preventDefault();
        
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name
        })
        .then(res => {
            console.log('username updated')
        })
        .catch(error => {
            console.log(error.message)
        });
    }

    return (
        <div  >
            <h2>{newUser ? 'Create an account' : 'Log in'}</h2>
            <form onSubmit={handleSubmit}>
            {newUser && <input type="text" onBlur={handleBlur} name="name" id="" placeholder="First Name" required/>}
                <br/>
            {newUser && <input type="text" onBlur={handleBlur} name="last" id="" placeholder="Last Name" required/>}
                <br/>
                <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Username or Email" required/>
                <br/>
                <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Password" required/>
                <br/>
            {newUser && <input type="password" onBlur={handleBlur} name="confirmPassword" id="" placeholder="Confirm Password" required/>}
                <br/>
                <br/>
            <button  type="submit" class="btn btn-warning btn-lg">{newUser ? 'Create an account' : 'Log in' } </button>
            <p style={{textAlign: 'center'}}>{newUser ? "Already have an account?" : "Don't have an account?"} <span style={{color: 'blue', borderBottom: '2px solid blue', cursor: 'pointer'}} onClick={() => setNewUser(!newUser)} >{ newUser ? 'Login' : 'Create an account'}</span></p>
            </form>  
            <p style={{color: "red"}}>{user.error}</p>   
                   
            <button className="social-button" onClick={handleFacebookLogin}>
                <img style={{height: "30px", width: "30px", marginRight:"70px"}} src={fbLogo} alt=""/> Continue With Facebook</button>
             <br/>
            <button className="social-button" onClick={handleGoogleLogin}>
            <img style={{height: "25px", width: "25px", marginRight:"100px"}} src={googleLogo} alt=""/> Continue With google</button>
            
        </div>
    );
};

export default LoginForm;