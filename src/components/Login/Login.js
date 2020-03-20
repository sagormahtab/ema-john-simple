import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    const handleSignIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            console.log('redirect now');
            window.location.pathname = '/review';
        })
    }
    //console.log(auth);
    const handleSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = '/';
        });
    }
    return (
        <div>
            <h1>Join the Party !!!</h1>
            {
                auth.user ? <button onClick = {handleSignOut}>Sign Out</button> :
                <button onClick={handleSignIn}>Sign In with Google</button>
            }
        </div>
    );
};

export default Login;