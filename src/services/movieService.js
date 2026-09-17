import { supabase } from "../lib/supabaseClient";

export async function getMovies() {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data.map((movie) => ({
    ...movie,

    // Convert Supabase column names to the names used by your React components
    year: movie.release_year,
    image: movie.poster_url,
    cast: movie.actors,
  }));
}