//axios API
import axios from "axios";

function fetchMovies() {
  axios
  .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
  .then((response) => {
    console.log(response);
  })
}
fetchMovies();
