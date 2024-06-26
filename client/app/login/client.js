'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import '@/styles/globals.css';

function Login() {
    const router = useRouter()
    const[formData,setFormData] = useState({
        email:"",
        password:"",
    });

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name] : e.target.value})
    }

    const submitHandler = async (e) =>{
        e.preventDefault();
        try {
            const res = await fetch('https://pixelspeak.onrender.com/api/login',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)            
            })

            if(!res.ok){
                throw new Error('Failed to sign up');
            }
            const data = await res.json()
            console.log("Login data : ",data);
            localStorage.setItem('auth-token', data.token);
  
            router.push('/upload')
        } catch (error) {
            console.error('Error logging: ', error.message);
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-500">
            <div className="bg-white shadow-md rounded-md p-8">
                <h2 className="text-3xl font-semibold text-center mb-6 text-black">Login</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-500"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-500"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-indigo-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="mt-4">
                <p className="text-white">No account? <button className="text-white underline" onClick={() => router.push('/signup')}>Sign up</button></p>
            </div>
        </div>
    );
}


export default Login