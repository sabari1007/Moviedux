import React from 'react';
import '../styles.css';
import { useState } from 'react';
import Moviecard from './Moviecard';

export default function MoviesGrid({ movies }) {
	const [SearchTerm, setSearchTerm] = useState('');

	const [Genre, setGenre] = useState('All Genres');
	const [Rating, setRating] = useState('All Ratings');

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleGenreChange = (e) => {
		setGenre(e.target.value);
	};

	const handleRatingChange = (e) => {
		setRating(e.target.value);
	};

	const matchesGenre = (movie, Genre) => {
		return (
			Genre === 'All Genres' || movie.genre.toLowerCase() === Genre.toLowerCase()
		);
	};

	const matchSearchTerm = (movie, SearchTerm) => {
		return movie.title.toLowerCase().includes(SearchTerm.toLowerCase());
	};

	const matchesRating = (movie, rating) => {
		switch (rating) {
			case 'All Ratings':
				return true;
			case 'good':
				return movie.rating >= 8;
			case 'ok':
				return movie.rating >= 5 && movie.rating < 8;
			case 'bad':
				return movie.rating < 5;
			default:
				return false;
		}
	};

	const filteredMovies = movies.filter(
		(movie) =>
			matchesGenre(movie, Genre) &&
			matchesRating(movie, Rating) &&
			matchSearchTerm(movie, SearchTerm),
	);

	return (
		<div>
			<input
				type="text"
				className="search-input"
				placeholder="Search here..."
				value={SearchTerm}
				onChange={handleSearchChange}
			/>

			<div className="filter-bar">
				<div className="filter-slot">
					<label>Genre</label>
					<select
						className="filter-dropdown"
						value={Genre}
						onChange={handleGenreChange}
					>
						<option value="All Genres">All Genres</option>
						<option value="Action">Action</option>
						<option value="Fantasy">Fantasy</option>
						<option value="Drama">Drama</option>
						<option value="Horror">Horror</option>
					</select>
				</div>

				<div className="filter-slot">
					<label>Rating</label>
					<select
						className="filter-dropdown"
						value={Rating}
						onChange={handleRatingChange}
					>
						<option>All Ratings</option>
						<option value="good">Good</option>
						<option value="ok">Ok</option>
						<option value="bad">Bad</option>
					</select>
				</div>
			</div>

			<div className="movies-grid">
				{filteredMovies.map((movie) => (
					<Moviecard key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	);
}
