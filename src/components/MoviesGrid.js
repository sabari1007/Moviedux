import React from 'react';
import '../styles.css';
import { useState, useEffect } from 'react';
import Moviecard from './Moviecard';

export default function MoviesGrid() {
	const [movies, setMovies] = useState([]);
	const [SearchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		fetch('movies.json')
			.then((response) => response.json())
			.then((data) => setMovies(data));
	}, []);

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const filteredMovies = movies.filter((movie) =>
		movie.title.toLowerCase().includes(SearchTerm.toLowerCase()),
	);

	return (
		<div>
			<input
				type="text"
				className="search-input"
				placeholder="Search here..."
				value={SearchTerm}
				onChange={handleChange}
			/>
			<div className="movies-grid">
				{filteredMovies.map((movie) => (
					<Moviecard key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	);
}
