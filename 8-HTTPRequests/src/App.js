import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	async function fetchMoviesHandler() {
		setLoading(true);
		const response = await fetch("https://swapi.dev/api/films");
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
		setLoading(false);
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{loading && <h2>Loading...</h2>}
				{!loading && movies.length === 0 && <h2>No Movies Fetched</h2>}
				{!loading && movies.length > 0 && <MoviesList movies={movies} />}
			</section>
		</React.Fragment>
	);
}

export default App;
