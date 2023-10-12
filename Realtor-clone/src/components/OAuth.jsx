import React, { Component } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';

// Components
import { db } from '../firebase';

const OAuth = () => {
    const navigate = useNavigate();

    async function onGoogleClick() {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider();

            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Check If The USer Exists
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp(),
                });
            }
            navigate("/");

        } catch (error) {
            toast.error("Could not Authorize with Google");
            console.log(error)
        }


    }

    return (
        <button type='button' onClick={onGoogleClick} className='w-full flex justify-center items-center bg-red-700 text-white px-3 py-7 uppercase rounded text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-sm hover:shadow-md active:shadow-lg transition duration-150 ease-in-out'>
            <FcGoogle className='mr-2 text-2xl bg-white rounded-full' /> Continue With Google
        </button>
    )
}

export default OAuth