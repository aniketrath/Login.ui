import React from 'react'

class SignUpPage extends React.Component {
    render() {
        return (
            <div className='w-1/3 py-4 pr-32'>
                <div className='py-2'>

                    <h1 className='text-[4rem] font-bold'>
                        Welcome to Login.uI
                    </h1>

                    <h2 className='text-lg'>
                        Please enter your Details.
                    </h2>
                </div>
                <form action="" method="post">

                    <div className="py-2 pr-4 flex">
                        <div className='py-2 pr-4'>
                            <h1 className='text-sm'>First Name:</h1>
                            <input className='h-12 pl-4 rounded-xl w-48
                        bg-gray-500 placeholder:text-gray-200'
                                type="text" name="Fname" id="Fname" placeholder='First Name' />
                        </div>
                        <div className='py-2 pr-4'>
                            <h1 className='text-sm'>Last Name:</h1>
                            <input className='h-12 pl-4 rounded-xl w-48
                        bg-gray-500 placeholder:text-gray-200'
                                type="text" name="Lname" id="Lname" placeholder='Last Name' />
                        </div>

                    </div>


                    <div className='py-2 pr-14'>
                        <h1 className='text-sm'>Email:</h1>
                        <input
                            className='h-12 min-w-full px-4 rounded-xl
                        bg-gray-500 placeholder:text-gray-200'
                            type="email" name="email" id="email" placeholder='Enter your Email.' />
                    </div>
                    <div className='py-2 pr-14'>
                        <h1 className='text-sm'>Password:</h1>
                        <input
                            className='h-12 min-w-full px-4 rounded-xl
                        bg-gray-500 placeholder:text-gray-200'
                            type="password" name="password" id="password" placeholder='Password.' />
                    </div>
                    <div className='py-6 pr-14'>
                        <button className='bg-gray-500 text-xl py-2 px-20
                    rounded-xl text-gray-50 min-w-full'
                            type="submit">Sign Up
                        </button>
                    </div>

                    <div className='flex '>
                        <h2 className='text-center'>Already have an Account ? &nbsp;</h2>
                        <a href="/"> Sign in.</a>
                    </div>
                </form>
            </div >
        )
    }
}

export default SignUpPage