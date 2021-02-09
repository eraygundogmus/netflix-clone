function movieSection(movies) {
    return movies.map((movie) => {
        if (movie.backdrop_path == null){
            console.log('null') 
        } else
        return `<img src=${IMG_URL + movie.backdrop_path} movie-id=${movie.id}/>`;
    })
}

function createMovieContainer(movies) {
    const movieItem = document.createElement('div');
    movieItem.setAttribute('class', 'movie');
    
    const movieTemp = `
    <section class="section">
        ${movieSection(movies)}
    </section>    
    `;

    movieItem.innerHTML = movieTemp;
    return movieItem;
}


function createMovieContainer2(movies) {
    const movieItem = document.createElement('div');
    movieItem.setAttribute('class', 'movie');
    
    const movieTemp = `
    <section class="section2">
        ${movieSection2(movies)}
    </section>    
    `;

    movieItem.innerHTML = movieTemp;
    return movieItem;
}

function movieSection2(movies) {
    return movies.map((movie) => {
        if (movie.poster_path == null){
            console.log('null') 
        } else
        return `<img src=${IMG_URL + movie.poster_path} movie-id=${movie.id}/>`;
    })
}


function createFilteredMovieContainer(movies,myData) {
    const movieItem2 = document.createElement('div');
    movieItem2.setAttribute('class', 'filtered-movie');
    const generate = Math.floor(Math.random() * 20)
    const random = myData.results[generate]
    const url = IMG_URL + random.backdrop_path
    const rndm = random.overview
    const strShorter = function truncate(rndm, n){
        return rndm?.length > n ? rndm.substr(0, n-1) + "..." : rndm;
    }
    const deneme = `${url}`    
    const movieTemp2 = `
        <div class="bg-img" style="background-size: cover; background-image: linear-gradient(to bottom, rgba(255,255,255,0) 70%, rgba(20,20,20,0.9) 85%), url(${deneme});"/>
        <div class="random-content">
        <h3 class="random-title"> ${random.title}</h3>
        <p class="random-info">${strShorter(rndm,400)}</p>
        <div class="random-buttons"><button class="random-button-1">Oynat</button><button class="random-button-2">Daha Fazla Bilgi</button>
        </div>
        </div>`
    movieItem2.innerHTML = movieTemp2;
    return movieItem2;
}
