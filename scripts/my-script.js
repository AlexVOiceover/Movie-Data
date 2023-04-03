//Create the movieData Object
let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: ["George Clooney","Meryl Streep","Bill Murray","Jason Schwartzman"],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

// Get the Flex Container
const flexContainerGlobal = document.querySelector(".flex-container-movie-cards");

//Get the buttons
const sortYearButton = document.querySelector("#orderByYearButton");
const sortTitleButton = document.querySelector("#orderByTitleButton");
const addMovieButton = document.querySelector("#addMovie");

// Function to draw the movieData object content on the screen
function drawMovieCards(){

  //Reset flexContainerGlobal
  flexContainerGlobal.innerHTML = "";

  // Loop through the movie titles in the movieData object
  for (let movieTitle in movieData) {
    
    // Create a new div element for each movie title and add the class flex-nested-container
    let movieCardLine = document.createElement("div");
    movieCardLine.classList.add("flex-nested-container");

    // Create separate elements for each piece of information and add it to the movie card div
      let titleElement = document.createElement("h2");
      titleElement.textContent = movieTitle;
      movieCardLine.appendChild(titleElement);
      // Add class, will be used for sorting
      titleElement.setAttribute('class', 'title'); 

      let plotElement = document.createElement("p");
      plotElement.textContent = "Plot: " + movieData[movieTitle].plot;
      movieCardLine.appendChild(plotElement);

      let castElement = document.createElement("p");
      castElement.textContent = "Cast: " + movieData[movieTitle].cast.join(", ");
      movieCardLine.appendChild(castElement);

      let runtimeElement = document.createElement("p");
      runtimeElement.textContent = "Runtime: " + movieData[movieTitle].runtime + " minutes";
      movieCardLine.appendChild(runtimeElement);

      let ratingElement = document.createElement("p");
      ratingElement.textContent = "Rating: " + movieData[movieTitle].rating;
      movieCardLine.appendChild(ratingElement);

      let yearElement = document.createElement("p");
      yearElement.textContent = "Year: " + movieData[movieTitle].year;
      movieCardLine.appendChild(yearElement);
      // Add class, will be used for sorting
      yearElement.setAttribute('class', 'year'); 

    // Append the new div element to the flex container
    flexContainerGlobal.appendChild(movieCardLine);

  }
}

drawMovieCards();


function sortMovieCards(sortFunction) {
  // Get all the children from flexcontainerGlobal, create an Array and store it in moiveCardDivs
  let movieCardDivs = Array.from(flexContainerGlobal.children);

  // Sort the movie cards using the given function
  movieCardDivs.sort(sortFunction);

  // Append the sorted movie cards to the flex container
  movieCardDivs.forEach(function(card) {
    flexContainerGlobal.appendChild(card);
  });
}


// Add event listener to sort by year button
sortYearButton.addEventListener("click", function() {
  sortMovieCards(function(a, b) {
    const yearA = parseInt(a.querySelector(".year").textContent.substring(6)); //With substring(6) I extract the year
    const yearB = parseInt(b.querySelector(".year").textContent.substring(6));
    return yearA - yearB;
  });
});

// Add event listener to sort by title button
sortTitleButton.addEventListener("click", function() {
  sortMovieCards(function(a, b) {
    const titleA = a.querySelector(".title").textContent.toUpperCase();
    const titleB = b.querySelector(".title").textContent.toUpperCase();

    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
});


// TEST DATA
document.querySelector("#titleInput").value = "El Ete y el Oto";
document.querySelector("#plotInput").value = "This is just some test data";
document.querySelector("#castInput").value = "Alfonso, Tomas, Pedrito";
document.querySelector("#runtimeInput").value = "120";
document.querySelector("#ratingInput").value = "9.4";
document.querySelector("#yearInput").value = "1975";

  // Add event listener to add movie button
addMovieButton.addEventListener('click', function() {

  const newTitle = document.querySelector('#titleInput').value;
  const newPlot = document.querySelector('#plotInput').value;
  const newCast = document.querySelector('#castInput').value.split(',');
  const newRuntime = document.querySelector('#runtimeInput').value;
  const newRating = document.querySelector('#ratingInput').value;
  const newYear = document.querySelector('#yearInput').value;

  // Create a new movie object
  let newMovie = {
    plot: newPlot,
    cast: newCast,
    runtime: newRuntime,
    rating: newRating,
    year: newYear,
  };

  // Add the new movie to the movieData object
  movieData[newTitle] = newMovie;

  // Reload Flex Container
  drawMovieCards();

  // Clear the form
  document.querySelector("#titleInput").value = "";
  document.querySelector("#plotInput").value = "";
  document.querySelector("#castInput").value = "";
  document.querySelector("#runtimeInput").value = "";
  document.querySelector("#ratingInput").value = "";
  document.querySelector("#yearInput").value = "";
 }
);
