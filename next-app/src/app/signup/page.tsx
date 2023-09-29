"use client"
import Link from "next/link";
import React, {useEffect} from "react";
import { useRouter } from "next/navigation";
import  axios from "axios";
import {toast} from "react-hot-toast"

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const [loading, setLoading] = React.useState(false);

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup",user);
            console.log("signup success", response.data);
            router.push("/login");
        } catch (error:any) {
            console.error(error);
            toast.error(error.message);
        }finally{

        }
    }

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    }, [user])


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-yellow-600">SignupPage</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input
                className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type='text'
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="username"
            />
            <label htmlFor="email">Email</label>
            <input
                className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type='text'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
            <label htmlFor="password">Password</label>
            <input
                className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type='text'
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <button
                onClick={onSignup}
                className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                {buttonDisabled ? "Disabled": "Signup"}
            </button>
            <Link href="/login">Visit Login</Link>
        </div>
    );
}
