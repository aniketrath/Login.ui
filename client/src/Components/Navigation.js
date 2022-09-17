import React from 'react'

const Navigation = () => {
  return (
    <div className='flex py-10' >
      <div className='flex pl-20'>
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500
      w-10 h-10 rounded-full'>
          &nbsp;
        </div>
        <h1 className=' text-2xl font-bold mx-4 my-2 pr-20'>Login.uI</h1>
      </div>
      <div className="flex py-2">
        <a className='text-xl px-20 hover:text-gray-50' href="/">Login</a>
      </div>
    </div>
  )
}

export default Navigation