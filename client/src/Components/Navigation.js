import React from 'react'

const Navigation = () => {
  return (
    <div className='flex py-4 py-10'>
      <div className='flex ml-20'>
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500
        w-10 h-10 rounded-full'>
          &nbsp;
        </div>
        <h1 className='text-gray-200 text-2xl font-bold mx-4 my-2'>Login.uI</h1>
      </div>
      <div className="flex py-3">
        <a className='text-gray-200 text-xl px-8' href="/">Home</a>
        <a className='text-gray-200 text-xl px-8' href="/">Login</a>
      </div>
    </div>
  )
}
export default Navigation;

