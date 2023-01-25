/* eslint-disable array-callback-return */
import { useState } from "react";
import Header from "./components/header";
import Allcards from "./components/AllCards";
import MovieContanier from "./components/movieContainer";

function App() {
  const [searchMovie, setsearchMovie] = useState();
  const [timeoutid, UpdateTimeOut] = useState();
  const [isLoading, setLoading] = useState(false);
  const [movieData, setmovieData] = useState({});
  function inptChange(e) {
    clearTimeout(timeoutid);
    let url = "https://www.omdbapi.com/?apikey=516bac88&s=" + e.target.value;
    const timeout = setTimeout(() => {
      getData(url);
    }, 500);
    UpdateTimeOut(timeout);
  }

  async function getData(url) {
    setLoading(true);
    await fetch(url)
      .then((res) => res.json())
      .then((a) => {
        setsearchMovie(a.Search);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async function onclickMovie(imdbID) {
    let url = "https://www.omdbapi.com/?apikey=516bac88&i=" + imdbID;
    await fetch(url)
      .then((res) => res.json())
      .then((res) => setmovieData(res));
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function back() {
    setmovieData({});
  }
  return (
    <div className="App">
      <Header inpt={inptChange} />
      {movieData.Title && (
        <MovieContanier selectedMovie={movieData} back={back} />
      )}
      <Allcards
        loading={isLoading}
        onclickMovie={onclickMovie}
        search={searchMovie}
      />
    </div>
  );
}

export default App;
