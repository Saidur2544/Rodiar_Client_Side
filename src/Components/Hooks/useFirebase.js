import intializeFirebase from "../Firebase/FirebaseInit";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    updateProfile, 
    signOut } from "firebase/auth";

intializeFirebase();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const Swal = require('sweetalert2');
    const openAlart = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Log out Successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const loginAlart = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Log in Successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    const destination = location?.state?.from || '/';
                    history.replace(destination);
                }).catch((error) => {
                });
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
                loginAlart()
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://ancient-plains-04086.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    useEffect(() => {
        fetch(`https://ancient-plains-04086.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])

    const logout = ( history) => {
        setIsLoading(true);
        signOut(auth).then(() => {
            openAlart()
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setIsLoading(false));
    }
    return {
        user,
        isLoading,
        authError,
        registerUser,
        logout,
        loginUser,
        admin,
        setIsLoading
    };
};

export default useFirebase;