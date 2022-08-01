import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function fetchMoviesHandler() {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch("https://swapi.dev/api/films/");

			if (!response.ok) {
				throw new Error("Something went wrong");
			}

			const data = await response.json();
			const transformedMovies = data.results.map(movie => {
				return {
					id: movie.episode_id,
					title: movie.title,
					releaseDate: movie.release_date,
					openingText: movie.opening_crawl,
				};
			});
			setMovies(transformedMovies);
		} catch (error) {
			setError(error.message);
		}
		setLoading(false);
	}

	let content = <h2>No Movies Fetched</h2>;

	if (loading) {
		content = <h2>Loading...</h2>;
	} else if (!loading && error) {
		content = <h2>{error}</h2>;
	} else if (!loading && !error && movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;
