import { useState } from "react";
import {
	SearchBar,
	Button,
	Container,
	Movie,
	MovieImg,
	Description,
	Title,
	Year,
} from "./Main.styled";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<any>(null);
	const [data, setData] = useState("");
	const [movies, setMovies] = useState<any[]>([]);

	const searchMovies = async (event: any) => {
		event.preventDefault();
		setLoading(true);
		const url = `http://www.omdbapi.com/?&apikey=${API_KEY}&s=${data}&type="movie"`;
		try {
			const response = await fetch(url);
			const api_data = await response.json();
			setError(null);
			setMovies(api_data.Search);
			setLoading(false);
		} catch (err) {
			setError("Unexpected error occured");
			setLoading(false);
		}
	};

	return (
		<>
			<div>
				<form onSubmit={searchMovies}>
					<SearchBar
						type="text"
						name="query"
						placeholder="Search movies by name"
						value={data}
						onChange={(event) => setData(event.target.value)}
					/>
					<Button type="submit">Search</Button>
				</form>
			</div>

			<Container>
				{loading && !error ? (
					<span> LOADING </span>
				) : error ? (
					<div className="message"> {error} </div>
				) : (
					movies.map((movie) => (
						<Movie>
							<MovieImg src={movie.Poster} alt="movieimage" />
							<Description>
								<Title>{movie.Title}</Title>
								<Year>Year of Release: {movie.Year}</Year>
							</Description>
						</Movie>
					))
				)}
			</Container>
		</>
	);
};

export default Main;
