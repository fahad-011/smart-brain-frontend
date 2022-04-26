import React from "react";

const Navigation= ({ onRouteChange, isSignedIn }) =>{
        if(isSignedIn){
            return(
            <nav>
            <p onClick={() => onRouteChange('signout')} className="f3 link dim black underline pa3 pointer" style={{display: 'flex', justifyContent:'flex-end'}}>Sign Out</p>
            </nav>
            );
        }else{
            return(
            <nav style ={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer" style={{display: 'flex', justifyContent:'flex-end'}}>Signin</p>
            <p onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer" style={{display: 'flex', justifyContent:'flex-end'}}>Register</p>
            </nav>
        );
        }    
}
export default Navigation;