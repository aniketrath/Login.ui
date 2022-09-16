import React from 'react'

const LoginPage = () => {
    return (
        <div className='w-1/3 py-20 pr-32'>
            <div className='py-2'>
                <h1 className='text-[4rem] font-bold'>
                    Welcome Back
                </h1>
                <h2 className='text-lg'>
                    Please enter your Details.
                </h2>
            </div>
            <form action="" method="post">
                <div className='py-2 '>
                    <h1 className='text-sm'>Email:</h1>
                    <input
                        className='h-12 min-w-full px-4 rounded-xl
                        bg-gray-500 placeholder:text-gray-200'
                        type="email" name="email" id="email" placeholder='Enter your Email.' />
                </div>
                <div className='py-2'>
                    <h1 className='text-sm'>Password:</h1>
                    <input
                        className='h-12 min-w-full px-4 rounded-xl
                        bg-gray-500 placeholder:text-gray-200'
                        type="password" name="password" id="password" placeholder='Password.' />
                </div>
                <div className='flex min-w-full py-2 items-center'>
                    <input className='mx-2' type="checkbox" name="RememberMe" id="RememberMe" />
                    <label htmlFor="RememberMe">Remember Me &nbsp;</label>
                    <a className='ml-48' href="/">Forgot Password?</a>
                </div>
                <div>
                    <button className='bg-gray-500 text-xl py-2 px-20
                    rounded-xl text-gray-50 min-w-full'
                        type="submit">Sign In
                    </button>
                </div>

                <div className='py-4 flex '>
                    <h2 className='text-center'>Don't have an Account ? &nbsp;</h2>
                    <a href="/"> Sign up.</a>
                </div>
            </form>
        </div >
    )
}

export default LoginPage