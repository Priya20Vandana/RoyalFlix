import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MovieRow from "../components/MovieRow";

import {
trendingMovies,
queensAndEmpresses,
periodRomance,
warPowerPolitics,
} from "../data/movies";

function Home() {
return (
<> <Navbar />


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


);
}

export default Home;
