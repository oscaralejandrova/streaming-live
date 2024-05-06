import React from 'react'
import FormUser from '../components/HomePage/FormUser'
import './styles/homePage.css'

const HomePage = () => {

    return (
        <div className="centered-content">
            <div className="home-page">
                <h1 className="title-one">Streaming Live</h1>
                <h2 className="subtitle">Hey buddy</h2>
                <p className="description">To see the series and movies we have, tell me your name please.</p>
                <FormUser />
            </div>
        </div>
    )

}

export default HomePage