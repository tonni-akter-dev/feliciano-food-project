import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const auth =getAuth();
const googlrProvider=new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();
const useFirebase=()=>{
    const [user,setUser]=useState({});
const[error,setError]=useState('');


const googleSignin=()=>{
    signInWithPopup(auth,googlrProvider)
    .then(result=>{
        setUser(result.user);
    }).catch(error=>{
        setError(error.message)
    })
}
const githubSignin=()=>{
    signInWithPopup(auth,githubProvider)
    .then(result=>{
        setUser(result.user);
    }).catch(error=>{
        setError(error.message)
    })
}
const logout=()=>{
    signOut(auth)
    .then(()=>{
        setUser(user)
    })
}
useEffect(()=>{
onAuthStateChanged(auth,(user)=>{
    if (user) {
        setUser(user)
    }
})

},[])
return{user,error,googleSignin,githubSignin,logout}

}
export default useFirebase;