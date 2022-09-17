import React from 'react'
import Body from '../Components/Body'
import Background from '../Components/Background'
import Navigation from '../Components/Navigation'
import Quote from '../Components/BodyComponents/Quote'
import Dash from '../Components/BodyComponents/Dashoard'

const Dashboard = () => {
    return (
        <Background>
            <Navigation />
            <Body>
                <Dash />
                <Quote />
            </Body>
        </Background>
    )
}

export default Dashboard