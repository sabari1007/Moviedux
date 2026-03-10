import React from 'react';
import '../styles.css';
import Moviecard from './Moviecard';

export default function Watchlist({ watchlist, movies, toggleWatchlist }) {
	return (
		<div>
			<h2>Your Watchlist</h2>
			<div className="watchlist">
				{watchlist.map((id) => {
					const movie = movies.find((m) => m.id === id);
					return (
						<Moviecard
							key={id}
							movie={movie}
							isWatchlisted={true}
							toggleWatchlist={toggleWatchlist}
						/>
					);
				})}
			</div>
		</div>
	);
}
