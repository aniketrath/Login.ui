import React from 'react'

const Body = (props) => {
    return (
        <div className='flex px-20 py-10'>
            {props.children}
        </div>
    )
}

export default Body