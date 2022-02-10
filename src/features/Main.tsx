import Movie from "./Movie"
import SearchBar from "./SearchBar"

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=7a984471"

const Main = () => {
  return (
    <>
      <SearchBar />
        <Movie />
    </>
  )

}

export default Main