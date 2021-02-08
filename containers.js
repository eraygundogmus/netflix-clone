
function movieSection(movies) {
    return movies.map((movie) => {
        return `<img src=${IMG_URL + movie.poster_path} movie-id=${movie.id}/>`;
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

{/* <div class="content">
<p id="content-info> Xasda </p>
</div>
 */}
function createFilteredMovieContainer(movies,myData) {
    const movieItem2 = document.createElement('div');
    movieItem2.setAttribute('class', 'movie');
    const generate = Math.floor(Math.random() * 20)
    const random = myData.results[generate]
    const movieTemp2 = `
    <section class="section">
        <img src=${IMG_URL + random.poster_path} movie-id=${random.id}/>
    </section>
 
    `;
    movieItem2.innerHTML = movieTemp2;
    return movieItem2;
}

{/* <div class="content">
<p id="content-info> X </p>
</div>    
 */}