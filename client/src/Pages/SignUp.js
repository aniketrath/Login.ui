import React from 'react'
import Body from '../Components/Body'
import Background from '../Components/Background'
import Navigation from '../Components/Navigation'
import Quote from '../Components/BodyComponents/Quote'
import SignUpPage from '../Components/BodyComponents/SignUpPage'


const SignUp = () => {
    return (
        <Background>
            <Navigation />
            <Body>
                <SignUpPage />
                <Quote />
            </Body>
        </Background>
    )
}

export default SignUp