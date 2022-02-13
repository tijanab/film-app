import NoImage from 'src/res/no-image.png'

const placeholder = NoImage

const Movie = (movie: any) => {
  const poster = (movie.Poster === "N/A" ? placeholder : movie.Poster)
  return (
    <div className='movie'>
      <h2>{movie.Title}</h2>
      <div>
        <img
          alt={`${movie.Title}`}
					className='movie-image'
          src={poster}
        />
      </div>
      <p>Year of publication: {movie.Year}</p>
    </div>
  );
}

export default Movie