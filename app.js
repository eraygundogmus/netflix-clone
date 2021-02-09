
/* genre codes: action 28 animated 16 documentary 99 drama 18 family 10751 fantasy 14 history 36 comedy 35 war 10752 crime 80 music 10402 mystery 9648 romance 10749 sci fi 878 horror 27 TV movie 10770 thriller 53 western 37 adventure 12 */



const movieList = document.querySelector('#movies-container')
const trendMovie = document.querySelector('#trend-movie')
const horrorMovieList = document.querySelector('#horror-movies-container')



const new2 = (event) => {
    
    fetch(endpoint)
        .then((req) => req.json())
        .then((abc) => {
              const movies = abc.results;
              const movieBlock = createMovieContainer(movies);
              movieList.appendChild(movieBlock);
    })}

const new3 = (event) => {
    
     fetch(discoverHorror)
         .then((req) => req.json())
         .then((abc) => {
                const movies = abc.results;
                const movieBlock = createMovieContainer(movies);
                horrorMovieList.appendChild(movieBlock);
     })}
    


window.onload = function (event) {

    fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
              const movies = data.results;
              const myData = data
              const movieBlock2 = createFilteredMovieContainer(movies, myData);
              trendMovie.appendChild(movieBlock2);
    }).then(new2(event)).then(new3(event))
    

}
