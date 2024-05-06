import React, { useState } from 'react';
import series from '../../data/sample.json';
import { useSelector } from 'react-redux';
import './styles/peliculasPage.css';
import FooterPage from '../components/FooterPage/FooterPage';

const PeliculasPage = () => {
    const users = useSelector(states => states.user);

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 6; //  6 películas por página

    const openModal = (movie) => {
        setSelectedMovie(movie);
    };

    const closeModal = () => {
        setSelectedMovie(null);
    };

    const filteredMovies = series.entries
        .filter(movie => movie.releaseYear >= 2010 && movie.programType === "movie")
        .sort((a, b) => a.title.localeCompare(b.title));
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

    return (
        <div className="peliculas-page">

            <header className="custom-header">
                <h1 className="custom-title">Peliculas</h1>
                <p className="custom-welcome-message">Welcome <span className="custom-user">{users}</span>, Here you can find your favorite peliculas</p>
            </header>

            <article>
                <section className="movie-list">
                    {currentMovies.map(movie => (
                        <div key={movie.title} className="movie-item" onClick={() => openModal(movie)}>
                            <p>{movie.title}</p>
                            <img src={movie.images["Poster Art"].url} alt={movie.title} />
                        </div>
                    ))}
                </section>
            </article>
            <ul className="pagination">
                {currentPage !== 1 && (
                    <li className="pagination-item">
                        <button onClick={() => paginate(currentPage - 1)}>&#60;</button>
                    </li>
                )}
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`pagination-item ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                    </li>
                ))}
                {currentPage !== totalPages && (
                    <li className="pagination-item">
                        <button onClick={() => paginate(currentPage + 1)}>&#62;</button>
                    </li>
                )}
            </ul>
            {selectedMovie && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedMovie.title}</h2>
                        <p>{selectedMovie.description}</p>
                        <h3>{selectedMovie.releaseYear}</h3>
                        <img src={selectedMovie.images["Poster Art"].url} alt={selectedMovie.title} />
                    </div>
                </div>
            )}

            <footer>

                <FooterPage />


            </footer>
        </div>

    );
};

export default PeliculasPage;



