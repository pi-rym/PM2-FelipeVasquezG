

$.get("https://students-api.2.us-1.fl0.io/movies", (moviesData) =>{
        createMovie(moviesData)
});

const createMovie = (tempData) => {
    
    
    const boxPelicula = document.getElementById('box-pelicula');
    console.log(boxPelicula);
      tempData.forEach(movie => {
        //destructurar objetos 
        const{title,year,director,duration,genre,rate,poster} = movie;

        const movieDiv = document.createElement('div');
        const movieTitle = document.createElement('h2');
        const moviePoster = document.createElement('img');
        const movieYear = document.createElement('p');
        const movieDiretor = document.createElement('p');
        const movieDuration = document.createElement('p');
        const movieGenre = document.createElement('p');
        const movieRate = document.createElement('p');
        const elementoA = document.createElement('a');

        elementoA.classList.add('card');


        //asignar vcalores html.

        movieTitle.innerHTML = title;
        moviePoster.src = poster;
        movieYear.innerHTML = `Year: ${year}`;
        movieDiretor.innerHTML = director;
        movieDuration.innerHTML = duration;
        movieGenre.innerHTML = genre;
        movieRate.innerHTML = rate;
        elementoA.href = '#';
        

        //apendear elementos

        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(moviePoster);
        movieDiv.appendChild(movieYear);
        movieDiv.appendChild(movieDiretor);
        movieDiv.appendChild(movieDuration);
        movieDiv.appendChild(movieGenre);
        movieDiv.appendChild(movieRate);
        elementoA.appendChild(movieDiv)

        boxPelicula.appendChild(elementoA);
        

        // console.log('boxPelicula');
        
    });
}
