import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Dashoard = () => {

    const [data, setData] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Remove token from local storage
        localStorage.removeItem('token');
        // Redirect to home page
        navigate('/');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/')
        }
        const fetchData = async () => {
            // Retrieve token from local storage
            try {
                const response = await axios.get('http://localhost:8000/secure/getcreds', {
                    headers: {
                        authorization: token, // Send token in Authorization header
                    },
                });
                setData(response.data.userData); // Set the response data to state
            } catch (err) {
                setError(err.response ? err.response.data.error : 'An error occurred'); // Handle errors
            }
        };
        console.log(error);
        fetchData();
    }, []); // Empty dependency array means this effect runs once after initial render

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
                <h1 className='text-xl font-light'>User Name : {data.name}</h1>
                <h1 className='text-xl font-light'>User Email : {data.email}</h1>
                <h1 className='text-xl font-light'>User Position : {data.position}</h1>
            </div>
            <div className='pr-14'>
                <button
                    onClick={handleSignOut}
                    className='bg-gray-500 text-xl py-2 px-20 rounded-xl text-gray-50'
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default Dashoard