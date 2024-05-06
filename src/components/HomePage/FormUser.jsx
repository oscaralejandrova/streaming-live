import React, { useRef } from 'react'
import { setUser } from '../../store/states/user.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './formUser.css';

const FormUser = () => {

    const userInput = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()
        dispatch(setUser(userInput.current.value.trim()))
        navigate('/inicio')

    }

    return (

        <form onSubmit={handleSubmit} className="form-container">
            <input ref={userInput} type='text' className="input-field" />
            <button className="submit-button">Let's Start</button>
        </form>

    )

}

export default FormUser