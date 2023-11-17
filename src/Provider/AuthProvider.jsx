import { createContext, useEffect, useState } from "react";
import auth from './../Firebase/firebase.config';
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)



    const googlePopup = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubs = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser),
                setLoading(false)
        })
        return () => {
            unSubs()
        }
    }, [user])


    const data = {
        googlePopup,
        logOut,
        user
    }

    console.log(data)

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;