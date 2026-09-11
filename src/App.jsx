import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MovieRow from "./components/MovieRow";
import {
  trendingMovies,
  queensAndEmpresses,
  periodRomance,
  warPowerPolitics,
} from "./data/movies";

function App() {
  const trendingMovies = [
    {
      id: 1,
      title: "The Crown",
      year: "2016",
      genre: "Royal Drama",
      image: "/crown.jpg",
    },
    {
      id: 2,
      title: "Marie Antoinette",
      year: "2006",
      genre: "Historical Drama",
      image: "/marie.jpg",
    },
    {
      id: 3,
      title: "The Empress",
      year: "2022",
      genre: "Period Drama",
      image: "/The Empress.jpg",
    },
    {
      id: 4,
      title: "Bridgerton",
      year: "2020",
      genre: "Period Romance",
      image: "/bridgerton.jpg",
    },
  ];
 
  return(
     <>
      <Navbar />
      <Hero />
       <MovieRow
        title="Trending Royal Stories"
        movies={trendingMovies}
      />

      <MovieRow
        title="Queens & Empresses"
        movies={queensAndEmpresses}
      />

      <MovieRow
        title="Period Romance"
        movies={periodRomance}
      />

      <MovieRow
        title="War, Power & Politics"
        movies={warPowerPolitics}
      />

      <Footer />
    </>
    

  )
    
}

export default App
