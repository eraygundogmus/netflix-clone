
/* genre codes: action 28 animated 16 documentary 99 drama 18 family 10751 fantasy 14 history 36 comedy 35 war 10752 crime 80 music 10402 mystery 9648 romance 10749 sci fi 878 horror 27 TV movie 10770 thriller 53 western 37 adventure 12 */



const movieList = document.querySelector('#movies-container')
const trendMovie = document.querySelector('#trend-movie')
const horrorMovieList = document.querySelector('#horror-movies-container')
const comedyMovieList = document.querySelector('#comedy-movies-container')
const actionMovieList = document.querySelector('#action-movies-container')
const documentaryMovieList = document.querySelector('#documentary-movies-container')
const dramaMovieList = document.querySelector('#drama-movies-container')
const originalMovieList = document.querySelector('#original-movies-container')

discoverAction

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

const new4 = (event) => {
    
    fetch(discoverComedy)
         .then((req) => req.json())
         .then((abc) => {
                const movies = abc.results;
                const movieBlock = createMovieContainer(movies);
               comedyMovieList.appendChild(movieBlock);
        })}
    
    
    const new5 = (event) => {
    
    fetch(discoverAction)
         .then((req) => req.json())
         .then((abc) => {
                const movies = abc.results;
                const movieBlock = createMovieContainer(movies);
               actionMovieList.appendChild(movieBlock);
        })}

        const new6 = (event) => {
    
            fetch(discoverDocumentary)
                 .then((req) => req.json())
                 .then((abc) => {
                        const movies = abc.results;
                        const movieBlock = createMovieContainer(movies);
                        documentaryMovieList.appendChild(movieBlock);
                })}

                const new7 = (event) => {
    
                    fetch(discoverDrama)
                         .then((req) => req.json())
                         .then((abc) => {
                                const movies = abc.results;
                                const movieBlock = createMovieContainer(movies);
                                dramaMovieList.appendChild(movieBlock);
                        })}
                        const new8 = (event) => {
    
                            fetch(discoverOriginals)
                                 .then((req) => req.json())
                                 .then((abc) => {
                                        const movies = abc.results;
                                        const movieBlock = createMovieContainer2(movies);
                                        originalMovieList.appendChild(movieBlock);
                                })}
        


window.onload = function (event) {

    fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
              const movies = data.results;
              const myData = data
              const movieBlock2 = createFilteredMovieContainer(movies, myData);
              trendMovie.appendChild(movieBlock2);
    }).then(new2(event)).then(new3(event)).then(new4(event)).then(new5(event)).then(new6(event)).then(new7(event)).then(new8(event))
    

}


const header = document.querySelector("header");
const sectionOne = document.querySelector(".trend-movie");

const options = {
    rootMargin: "-700px 0px 0px 0px"
};

const observer = new IntersectionObserver(function
(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
        } else {
            header.classList.remove("nav-scrolled")
        }
    });
}, options);

observer.observe(sectionOne);