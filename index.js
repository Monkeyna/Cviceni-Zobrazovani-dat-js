console.log('funguju!');

const renderMovies = (movies) => {
    const movieListElm = document.querySelector('.movie-list');
    movieListElm.innerHTML = movies
      .map((movie) => {
        return `
      <li class="movie-detail">
      <div class="movie-poster">
        <img
          src="${movie.posterUrl}"
          alt="${movie.title}"
        />
      </div>
      <div class="movie-info">
        <h2 class="movie-title">${movie.title}</h2>
        <div class="movie-year">Rok vydání: ${movie.year}</div>
        <div class="movie-link">
          <a href="${movie.url}" target="_blank">Odkaz na CSFD</a>
        </div>
      </div>
    </li>
      `;
      })
      .join('');
  };
  
  fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((response) => {
      return response.json();
    })
    .then(renderMovies);