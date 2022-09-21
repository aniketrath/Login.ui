import React, { useState, useRef, useEffect } from 'react'
import Dash from './Dashoard';
import axios from 'axios';

const LoginPage = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errormsg, setErrorMsg] = useState("");
    const [success, setSuccess] = useState(false);

    const Uname = useRef();
    const Upwd = useRef();
    const Uemail = useRef();
    const Uposition = useRef();
    const api = axios.create({
        baseURL: `http://localhost:5000/user/`
    });

    useEffect(() => {
        api.get('/login')
            .then(res => {
                Uemail.current = res.data.userEmail;
                Uname.current = res.data.userName;
                Upwd.current = res.data.userPassword;
                Uposition.current = res.data.userPosition;
            })
    })

    useEffect(() => {
        userRef.current.focus();
    }, [])


    useEffect(() => {
        setErrorMsg('');
    }, [username, password])

    const handleUser = event => {
        const result = event.target.value;
        setUsername(result);
    }

    const handlePassCode = event => {
        const result = event.target.value.replace(/[^0-9]/gi, "");
        setPassword(result);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername('');
        setPassword('');
        if (Uemail.current === username && Upwd.current === password) {
            setSuccess(true);
        }

    };
    const userCred = {
        email: Uemail.current,
        name: Uname.current,
        position: Uposition.current
    };

    return (
        <>{success ? (
            <Dash
                Credentials={userCred}
            />
        ) : (
            <section className='w-1/3 py-20 pr-28'>
                <div className='py-2'>
                    <h1 className='text-[4rem] font-bold'>
                        Welcome Back
                    </h1>
                    <h2 className='text-lg'>
                        Please enter your Details.
                    </h2>
                    <h2 ref={errRef} aria-live='assertive' id='errormsg' className='text-lg text-red-400'>
                        {errormsg}
                    </h2>
                </div>
                <form method="post">
                    <div className='py-2 pr-4 '>
                        <label htmlFor='email' className='text-sm'>Email:</label>
                        <input required ref={userRef} onChange={handleUser} value={username}
                            className='h-12 min-w-full px-4 rounded-xl
                            bg-gray-500 placeholder:text-gray-200'
                            type="email" id="email" placeholder='Enter your Email.' />
                    </div>
                    <div className='py-2 pr-4'>
                        <label htmlFor='password' className='text-sm'>Password:</label>
                        <input onChange={handlePassCode} value={password}
                            className='h-12 min-w-full px-4 rounded-xl
                            bg-gray-500 placeholder:text-gray-200'
                            type="password" id="password" placeholder='Password.' />
                    </div>
                    <div className='flex min-w-full py-2 items-center pr-4'>
                        <input className='mx-2' type="checkbox" name="RememberMe" id="RememberMe" />
                        <label htmlFor="RememberMe">Remember Me &nbsp;</label>
                        <a className='ml-44' href="/">Forgot Password?</a>
                    </div>
                    <div className='pr-4'>
                        <button onClick={handleSubmit} className='bg-gray-500 text-xl py-2 px-20 
                        rounded-xl text-gray-50 min-w-full'
                            type="submit">Sign In
                        </button>
                    </div>
                    <div className='py-4 flex '>
                        <h2 className='text-center'>Don't have an Account ? &nbsp;</h2>
                        <a href="/newuser"> Sign up.</a>
                    </div>
                </form>
            </section>
        )}
        </>
    )
}

export default LoginPage;