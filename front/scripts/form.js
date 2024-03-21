const axios =  require('axios');
function validateForm({
    title, year, director, duration, genre, rate, poster 
}) {
    if(title == "" || year == "" || director == "" || duration == "" || genre == "" || rate == "" || poster == "" )
        return "DEBE DILIGENCIAR TODOS LOS DATOS";
    if ( year <1800 || year > 2024)
         return "el año debe comprender entre el 1800 y el 2024 ";
    if (isNaN(rate) || rate < 1 || rate >10)
        return "el rate debe ser un numero entre 1 y 10";

    return null;
}


function registerMovie  (event) {
   event.preventDefault();

const title = document.getElementById('title').value;
const year = document.getElementById('year').value;
const director = document.getElementById('director').value;
const duration = document.getElementById('duration').value;
const genre = document.getElementById('genre').value.split(',');
// const genre = document.getElementById('genre').value;
const rate = parseFloat(document.getElementById('rate').value);
// const rate = document.getElementById('rate').value;
const poster = document.getElementById('poster').value;


const error = validateForm ({title, year, director, duration, genre, rate, poster});
if(error) return alert(error);

return alert("DATOS CORRECTOS")
}

const submit = document.getElementById("movieForm");
submit.addEventListener ("submit" , registerMovie);




function deleteForm () {

    const title = document.getElementById('title');
    const year = document.getElementById('year');
    const director = document.getElementById('director');
    const duration = document.getElementById('duration');
    const genre = document.getElementById('genre');
    const rate = document.getElementById('rate');
    const poster = document.getElementById('poster');
    
    title.value = "";
    year.value= "";
    director.value="";
    duration.value= "";
    genre.value= "";
    rate.value= "";
    poster.value= "";

    
    };
        
    
   const botonDeletForm = document.getElementById('delete');
    
    botonDeletForm.addEventListener('click', deleteForm);

