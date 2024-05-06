import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import InicioPage from './pages/InicioPage'
import SeriesPage from './pages/SeriesPage'
import PeliculasPage from './pages/PeliculasPage'
import ProtectedRoutes from './pages/ProtectedRoutes'


function App() {

  

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/inicio' element={<InicioPage />} />
          <Route path='/inicio/series' element={<SeriesPage />} />
          <Route path='/inicio/peliculas' element={<PeliculasPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
