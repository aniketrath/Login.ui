import React from 'react';
const Dashoard = ({ userEmail, userName, userPosition }) => {

    return (
        <div className='w-1/3 py-24 '>
            <div className='py-2'>

                <h1 className='text-[4rem] font-bold'>
                    Welcome back,
                </h1>

                <h2 className='text-lg'>
                    Login Sucessfull. Welcome back Sir!
                </h2>
            </div>
            <h1 className='text-2xl'>User Details:</h1>
            <div className='py-6'>
                <h1 className='text-xl font-light'>User Name:{userName}</h1>
                <h1 className='text-xl font-light'>User Email:{userEmail}</h1>
                <h1 className='text-xl font-light'>User Position :{userPosition}</h1>
            </div>

            <div className='pr-14'>
                <a href='/' className='bg-gray-500 text-xl py-2 px-20
                    rounded-xl text-gray-50'
                    type="submit">Sign Out
                </a>
            </div>
        </div>
    )
}

export default Dashoard