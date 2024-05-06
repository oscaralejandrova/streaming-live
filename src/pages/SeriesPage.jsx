import React, { useState } from 'react';
import series from '../../data/sample.json';
import { useSelector } from 'react-redux';
import './styles/seriesPage.css';
import FooterPage from '../components/FooterPage/FooterPage';

const SeriesPage = () => {
    const users = useSelector(states => states.user);

    const [selectedSerie, setSelectedSerie] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const seriesPerPage = 6; // Cambia el número de series por página según sea necesario

    const openModal = (serie) => {
        setSelectedSerie(serie);
    };

    const closeModal = () => {
        setSelectedSerie(null);
    };

    const filteredSeries = series.entries
        .filter(serie => serie.releaseYear >= 2010 && serie.programType === "series")
        .sort((a, b) => a.title.localeCompare(b.title));
    const indexOfLastSerie = currentPage * seriesPerPage;
    const indexOfFirstSerie = indexOfLastSerie - seriesPerPage;
    const currentSeries = filteredSeries.slice(indexOfFirstSerie, indexOfLastSerie);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(filteredSeries.length / seriesPerPage);

    return (
        <div className="series-page">
            
            <header className="custom-series-header">
                <h1 className="custom-series-title">Series</h1>
                <p className="custom-series-welcome-message">Welcome <span className="custom-series-user">{users}</span>, Here you can find your favorite series</p>
            </header>

            <article>
                <section className="serie-list">
                    {currentSeries.map(serie => (
                        <div key={serie.title} className="serie-item" onClick={() => openModal(serie)}>
                            <p>{serie.title}</p>
                            <img src={serie.images["Poster Art"].url} alt={serie.title} />
                        </div>
                    ))}
                </section>
            </article>
            <ul className="pagination"> {/* Agrega la clase "pagination" aquí */}
                {currentPage !== 1 && (
                    <li className="pagination-item"> {/* Agrega la clase "pagination-item" aquí */}
                        <button onClick={() => paginate(currentPage - 1)}>&#60;</button>
                    </li>
                )}
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`pagination-item ${currentPage === index + 1 ? 'active' : ''}`}> {/* Agrega la clase "pagination-item" aquí */}
                        <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                    </li>
                ))}
                {currentPage !== totalPages && (
                    <li className="pagination-item"> {/* Agrega la clase "pagination-item" aquí */}
                        <button onClick={() => paginate(currentPage + 1)}>&#62;</button>
                    </li>
                )}
            </ul>
            {selectedSerie && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedSerie.title}</h2>
                        <p>{selectedSerie.description}</p>
                        <h3>{selectedSerie.releaseYear}</h3>
                        <img src={selectedSerie.images["Poster Art"].url} alt={selectedSerie.title} />
                    </div>
                </div>
            )}

            <footer>

                <FooterPage />


            </footer>

        </div>
    );
};

export default SeriesPage;
