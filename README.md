# Movie Data
This project is a simple web application that stores movie data in a JavaScript object and allows users to add new movies and sort the movies by year or title.

### `movieData` object
This object contains the initial movie data. Each key represents a movie title, and its value is an object with the movie's plot, cast, runtime, rating, and year.

### `drawMovieCards` function
This function draws the movie cards on the screen. It loops through the movieData object, creates a new div element for each movie title, and appends it to the flexContainerGlobal element. Each movie card contains a title, plot, cast, runtime, rating, and year. The function is called initially when the page loads, and also whenever the user clicks the "Order by year", "Order by title", or "Add Movie" buttons.

### `sortMovieCards` function
The sortMovieCards function sorts the movie cards displayed on the screen based on a given sorting function.

First, it converts the children of the global flex container (flexContainerGlobal) into an array (movieCardDivs). Then it applies the given sortFunction to sort the array in the order determined by the function.

Next, it removes the existing movie cards from the flex container by iterating over movieCardDivs and removing each of them. After that, it appends the sorted movie cards to the global flex container by iterating over movieCardDivs and appending each card to the flex container in the new order.

The sortFunction is passed as an argument to sortMovieCards and it determines the sorting order. The function is defined as a parameter and takes two arguments (a and b), which represent two movie card div elements to be compared. It returns a negative number if a should be before b, a positive number if a should be after b, and 0 if they are equal.