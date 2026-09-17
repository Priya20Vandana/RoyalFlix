const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const OMDB_BASE_URL = "https://www.omdbapi.com/";

export async function searchMovieByTitle(title, year) {
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

  return data;
}