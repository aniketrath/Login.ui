import React from 'react'
import Body from '../Components/Body'
import Background from '../Components/Background'
import Navigation from '../Components/Navigation'
import Quote from '../Components/BodyComponents/Quote'
import LoginPage from '../Components/BodyComponents/LoginPage'

const SignIn = () => {
    return (
        <Background>
            <Navigation />
            <Body>
                <LoginPage />
                <Quote />
            </Body>
        </Background>
    )
}

export default SignIn