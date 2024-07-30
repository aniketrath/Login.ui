import React, { useRef, useEffect, useReducer } from 'react'
import axios from 'axios';
import { DETAILS, DETAILS_DEFAULT, reducer } from '../../reducer/LoginReducer';
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [details, dispatch] = useReducer(reducer, DETAILS_DEFAULT);

    const api = axios.create({
        baseURL: `http://localhost:8000/`
    });

    useEffect(() => {
        userRef.current?.focus();
    }, [])



    const handleUser = event => {
        dispatch({ type: DETAILS.USERNAME, payload: event.target.value })
    }

    const handlePassCode = event => {
        dispatch({ type: DETAILS.PASSWORD, payload: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/auth/login', details)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem("token", res.data.token);
                navigate("/userdashboard");
            })
            .catch((err) => {
                const errorMessage = err.response ? err.response.data.error || 'An error occurred' : 'An error occurred';
                console.error('Login failed:', err);
                dispatch({ type: DETAILS.ERROR, payload: errorMessage });
            });
    };
    return (

        <section className='w-1/3 py-20 pr-28'>
            <div className='py-2'>
                <h1 className='text-[4rem] font-bold'>
                    Welcome Back
                </h1>
                <h2 className='text-lg'>
                    Please enter your Details.
                </h2>
                <h2 ref={errRef} aria-live='assertive' id='errormsg' className='text-lg text-red-400'>
                    {details[DETAILS.ERROR]}
                </h2>
            </div>
            <form method="post">
                <div className='py-2 pr-4 '>
                    <label htmlFor='email' className='text-sm'>Email:</label>
                    <input required onChange={handleUser} value={details[DETAILS.USERNAME]}
                        className='h-12 min-w-full px-4 rounded-xl
                            bg-gray-500 placeholder:text-gray-200'
                        type="email" id="email" placeholder='Enter your Email.' />
                </div>
                <div className='py-2 pr-4'>
                    <label htmlFor='password' className='text-sm'>Password:</label>
                    <input onChange={handlePassCode} value={details[DETAILS.PASSWORD]}
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

    )
}

export default LoginPage;