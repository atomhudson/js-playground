
const imageURL = "https://image.tmdb.org/t/p/w1280/";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer YOUR_ACCESS_TOKEN_HERE' // Replace with a secure method
    }
};

const getMovies = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data.results); // Debugging

        displayMovies(data.results);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
};


const displayMovies = (movies) =>{
    const movieBox = document.querySelector("#movie-box");
    movieBox.innerHTML = "";
    movies.forEach(
        movie => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("box");

            movieCard.innerHTML = `
                <img src="${imageURL + movie.poster_path}" alt="${movie.title}">
                <div class="overlay">
                    <h2>${movie.title}</h2>
                    <p><strong>⭐ Rating:</strong> ${movie.vote_average} (${movie.vote_count} votes)</p>
                    <p><strong>🎬 Release Date:</strong> ${movie.release_date}</p>
                    <p><strong>📈 Popularity:</strong> ${movie.popularity}</p>
                    <p><strong>🌍 Original Language:</strong> ${movie.original_language.toUpperCase()}</p>
                    <p><strong>🎭 Genre IDs:</strong> ${movie.genre_ids.join(", ")}</p>
                    <p><strong>🎥 Video Available:</strong> ${movie.video ? "Yes" : "No"}</p>
                    <p><strong>🔞 Adult Content:</strong> ${movie.adult ? "Yes" : "No"}</p>
                    <p><strong>📝 Overview:</strong> ${movie.overview}</p>
            </div>`;
            movieBox.appendChild(movieCard);
        }
    );
};
getMovies();

document.querySelector("#search").addEventListener(
    "keyup", 
    async function (event) {
        const query = event.target.value.trim(); // Trim to remove unnecessary spaces
    
        if (query !== "") {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                displayMovies(data.results);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        }else{
            getMovies();
        }
    }
);
