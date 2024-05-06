import React from 'react'
import { useSelector } from 'react-redux';
import './styles/inicioPage.css'
import { Link } from 'react-router-dom';
import FooterPage from '../components/FooterPage/FooterPage';
import placeholder from '../../assets/placeholder.png';


const InicioPage = () => {



    const users = useSelector(states => states.user)

    return (
        <div>

            <header className="custom-header">
                <h1 className="custom-title">Streaming Favorite</h1>
                <p className="custom-welcome-message">Welcome <span className="custom-user">{users}</span>, Here you can find your favorite series and movies</p>
            </header>

            <section className='container'>
                <div className='box'>
                    <Link to='/inicio/series' className='title'>SERIES</Link>
                    <img className='image_placeholder' src={placeholder} alt="Imagen placeholder" />
                </div>
                <div className='box'>
                    <Link to='/inicio/peliculas' className='title'>MOVIES</Link>
                    <img className='image_placeholder' src={placeholder} alt="Imagen placeholder" />
                </div>
            </section>

            <footer>

                <FooterPage />


            </footer>

        </div>
    )

}

export default InicioPage;

