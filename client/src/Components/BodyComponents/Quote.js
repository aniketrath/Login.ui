import React from 'react'

class Quote extends React.Component {
    render() {
        return (

            <div className="relative w-2/3 -mt-20" >
                <div className="absolute inset-y-0 right-28 
            w-[80vh] h-[80vh] 
            outline outline-gray-200/30
            backdrop-blur-xl
            rounded-3xl px-4">

                    <h1 className='text-[2.8rem] text-gray-100/90 py-32 font-light'>
                        "We've have been using Untitled to kick start
                        every new project and now, we cant imagine working
                        one without it"
                    </h1>
                    <h1 className='text-xl py-24'>
                        Aniket Rath <br />
                        Lead Designer , SOA <br />
                        Web Development Department
                    </h1>
                </div>
            </div>
        )
    }
}

export default Quote