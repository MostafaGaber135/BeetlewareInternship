import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import MovieDetails from './components/MovieDetails/MovieDetails'
import MoviesList from './components/MoviesList/MoviesList'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [movies, setMovies] = useState([])
  const [pageCount, setpageCount] = useState(0)

  //Get All Movies By Axios 
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar")
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
  }

  //Get Current Page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar"
      );
  
      setMovies(res.data.results);
      setpageCount(res.data.total_pages);
    };
  
    fetchMovies();
  }, []);
  

  //To Search In API
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
      setMovies(res.data.results)
      setpageCount(res.data.total_pages)
    }
  }
  return (
    <div className="min-h-screen bg-white font-[Almarai]">
      <Navbar search={search}/>

      <div className="container mx-auto px-4">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                movies={movies} getPage={getPage} pageCount={pageCount} 
                />
              }
            />
            <Route
              path="/movie/:id"
              element={<MovieDetails />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
