function movieSection(movies) {
    return movies.map((movie) => {
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


function createFilteredMovieContainer(movies,myData) {
    const movieItem2 = document.createElement('div');
    movieItem2.setAttribute('class', 'filtered-movie');
    const generate = Math.floor(Math.random() * 20)
    const random = myData.results[generate]
    const url = IMG_URL + random.backdrop_path
    console.log(url)
    const deneme = `${url}`    
    const movieTemp2 = `
        <div class="bg-img" style="background-size: cover; background-image: url(${deneme});"/>
    ;`
    movieItem2.innerHTML = movieTemp2;
    console.log(myData.results[generate])
    return movieItem2;
}
