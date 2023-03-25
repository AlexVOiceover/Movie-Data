# Movie Data
This repository contains a simple web application that stores movie data in a JavaScript object, and allows users to add new movies and sort the movies by year or title.

## Global Variables
### movieData
This object contains the initial movie data. Each key represents a movie title, and its value is an object with the movie's plot, cast, runtime, rating, and year.

### flexContainerGlobal
This variable represents the HTML element that will be used to display the movie cards on the screen. It is initialized using the document.querySelector method.

### sortYearButton
This variable represents the "Order by year" button. It is initialized using the document.querySelector method.

### sortTitleButton
This variable represents the "Order by title" button. It is initialized using the document.querySelector method.

### addMovieButton
This variable represents the "Add movie" button. It is initialized using the document.querySelector method.

## Functions
### drawMovieCards()
This function draws the movie cards on the screen. It loops through the movieData object, creates a new div element for each movie title, and appends it to the flexContainerGlobal element. Each movie card contains a title, plot, cast, runtime, rating, and year. The function is called initially when the page loads, and also whenever the user clicks the "Order by year" or "Order by title" buttons.

### sortMovieCards

How to Use
To use this application, simply open the index.html file in your web browser. You will see a list of movie cards on the screen, each displaying a title, plot, cast, runtime, rating, and year. To add a new movie, enter the information in the form fields provided and click the "Add movie" button. To sort the movies by year or title, click the corresponding button.