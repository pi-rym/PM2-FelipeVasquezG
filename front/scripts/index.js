// console.log(tempData);

const createMovie = (tempData) => {

    const boxPelicula = document.getElementById('box-pelicula');
    tempData.forEach(movie => {
        //destructurar objetos del obejo
        const{title,year,director,duration,genre,rate,poster} = movie;

        const movieDiv = document.createElement('div');
        const movieTitle = document.createElement('h2');
        const moviePoster = document.createElement('img');
        const movieYear = document.createElement('p');
        const movieDiretor = document.createElement('p');
        const movieDuration = document.createElement('p');
        const movieGenre = document.createElement('p');
        const movieRate = document.createElement('p');

        movieDiv.classList.add('card');


        //asignar vcalores html.

        movieTitle.innerHTML = title;
        moviePoster.src = poster;
        movieYear.innerHTML = year;
        movieDiretor.innerHTML = director;
        movieDuration.innerHTML = duration;
        movieGenre.innerHTML = genre;
        movieRate.innerHTML = rate;

        //apendear elementos

        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(moviePoster);
        movieDiv.appendChild(movieYear);
        movieDiv.appendChild(movieDiretor);
        movieDiv.appendChild(movieDuration);
        movieDiv.appendChild(movieGenre);
        movieDiv.appendChild(movieRate);


        boxPelicula.appendChild(movieDiv);

        return movieDiv;

        
    });
}
// createMovie(tempData);