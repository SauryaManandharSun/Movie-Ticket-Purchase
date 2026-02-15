import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Movies from './pages/Movies'
import { Toaster } from 'react-hot-toast'

export default function App() {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
      {!isAdminRoute && <Footer />}

    </>
  )
}
