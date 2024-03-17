import { initializeApp } from 'firebase/app';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    getAuth,
    signOut
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyATE3K_SsEBcZ_wPGqw_thPaxTjp_LDvR8",
    authDomain: "nextlevelfood.firebaseapp.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app, {});

export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return userCredential;
        })
        .catch((error) => {
            console.log('Error: ', error.message);
            // error handling needs to be added here
        });
}

export const userSignOut = () => {
    signOut(auth)
        .then(() => {
            console.log('User signed out');
            // redirection needs to be added here
        })
        .catch((error) => {
            console.log('Error: ', error.message);
        });
};

export const isLoggedIn = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user);
            } else {
                resolve(null);
            }
        });
    });
}