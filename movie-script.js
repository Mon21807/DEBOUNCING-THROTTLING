$(document).ready(function () {
    const apiKey = 'YOUR_OMDB_API_KEY';
    const apiUrl = 'http://www.omdbapi.com/';
  
    const searchInput = $('#movie-search');
    const resultsContainer = $('#movie-results');
  
    const debounceSearchMovies = debounce(searchMovies, 300);
  
    searchInput.on('input', debounceSearchMovies);
  
    function searchMovies() {
      const query = searchInput.val();
      if (query.length >= 3) {
        $.get(apiUrl, { apikey: apiKey, s: query }, function (data) {
          displayResults(data.Search);
        });
      } else {
        resultsContainer.empty();
      }
    }
  
    function displayResults(movies) {
      resultsContainer.empty();
      if (movies) {
        movies.forEach(function (movie) {
          const movieElement = `<div class="movie">${movie.Title}</div>`;
          resultsContainer.append(movieElement);
        });
      } else {
        resultsContainer.text('No movies found');
      }
    }
  });
  