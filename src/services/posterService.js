import { supabase } from "../lib/supabaseClient";

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const OMDB_BASE_URL = "https://www.omdbapi.com/";

async function fetchPosterFromOMDb(title, year) {
  const params = new URLSearchParams({
    apikey: OMDB_API_KEY,
    t: title,
    plot: "full",
  });

  if (year) {
    params.append("y", String(year));
  }

  const response = await fetch(`${OMDB_BASE_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`OMDb request failed: ${response.status}`);
  }

  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Movie not found");
  }

  if (!data.Poster || data.Poster === "N/A") {
    throw new Error("No poster available");
  }

  return data.Poster;
}

export async function fetchAndSavePosters() {
  const { data: movies, error: fetchError } = await supabase
    .from("movies")
    .select("id, title, release_year, poster_url")
    .order("id", { ascending: true });

  if (fetchError) {
    throw new Error(fetchError.message);
  }

  const results = [];

  for (const movie of movies) {
    try {
      const posterUrl = await fetchPosterFromOMDb(
        movie.title,
        movie.release_year
      );

      const { error: updateError } = await supabase
        .from("movies")
        .update({ poster_url: posterUrl })
        .eq("id", movie.id);

      if (updateError) {
        throw new Error(updateError.message);
      }

      results.push({
        id: movie.id,
        title: movie.title,
        status: "Success",
        poster: posterUrl,
      });
    } catch (error) {
      results.push({
        id: movie.id,
        title: movie.title,
        status: "Failed",
        error: error.message,
      });
    }

    // Small delay to avoid sending requests too quickly
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  return results;
}