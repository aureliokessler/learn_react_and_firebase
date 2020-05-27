import React, { useState } from 'react';
import firebase from "./FirebaseInit";
import { AddBlogPost } from './ArticleManager';
import "firebase/auth"

export default function Login() {
    const [status, setStatus] = useState(false);
    const [user, setUser] = useState('');

    function FirebaseAuthSignIn() {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(user);
            setUser(user);
            setStatus(true);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            setStatus(false);
          });
    }
    
    function FirebaseAuthSignOut() {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            setStatus(false);
          }).catch(function(error) {
            // An error happened.
          });
    }
    
    function checkSignIn() {
        if (firebase.auth().currentUser) {
            FirebaseAuthSignOut();
        } else {
            FirebaseAuthSignIn();
        }
    }

    return (
        <>
            <button onClick={checkSignIn}>
                {status ? 'Sign Out' : 'Sign In'}
            </button>
            {status &&
                <>
                    {user.displayName}
                </>
            }
            <button onClick={AddBlogPost}>
                Post a Blog article
            </button>
        </>
    );
}