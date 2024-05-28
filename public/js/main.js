async function getTrendingMoviesPreview() {
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
  const data = await res.json();

  const movies = data.results;
  const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview');

  movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container', 'bg-white', 'p-4', 'rounded', 'shadow');

    const movieImg = document.createElement('img');
    movieImg.classList.add('w-1/3', 'h-32');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);

    const information = document.createElement('div');
    information.classList.add('mt-4');

    const title = document.createElement('h3'); 
    title.classList.add('text-lg', 'font-bold', 'text-center');
    title.innerText = movie.title;

    const description = document.createElement('p');
    description.classList.add('text-gray-600', 'mt-0');
    const shortDescription = movie.overview.slice(0, 30) + '...';
    description.innerText = "Review: " + shortDescription;
    description.title = "Review: " + movie.overview;

    const originalLanguage = document.createElement('p'); 
    originalLanguage.classList.add('text-gray-600', 'mt-2');
    originalLanguage.innerText = `Lenguaje Original: ${movie.original_language}`; 

    const fecha = document.createElement('p'); 
    fecha.classList.add('text-gray-600', 'mt-2');
    fecha.innerText = `Fecha de Lanzamiento: ${movie.release_date}`;

    movieContainer.appendChild(movieImg);
    movieContainer.appendChild(information);
    information.appendChild(title);
    information.appendChild(description);
    information.appendChild(originalLanguage);
    information.appendChild(fecha);
    trendingPreviewMoviesContainer.appendChild(movieContainer);
  });
}
getTrendingMoviesPreview();