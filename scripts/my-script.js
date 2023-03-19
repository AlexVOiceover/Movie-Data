console.log("Initialising console");

//Create teh movieData Object
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
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
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


// Select the Flex Container
const flexContainerGlobal = document.querySelector('.flex-container');


// Loop through the movie titles in the movieData object
for (let movieTitle in movieData) {
  // Create a new div element for each movie title
  let movieCardLine = document.createElement('div');
  movieCardLine.setAttribute('class', '.flex-nested-container');

  // Create separate elements for each piece of information
  let titleElement = document.createElement('h2');
  let plotElement = document.createElement('p');
  let castElement = document.createElement('p');
  let runtimeElement = document.createElement('p');
  let ratingElement = document.createElement('p');
  let yearElement = document.createElement('p');

  // Populate the elements with the relevant data
  titleElement.textContent = movieTitle;
  plotElement.textContent = `Plot: ${movieData[movieTitle].plot}`;
  castElement.textContent = `Cast: ${movieData[movieTitle].cast.join(', ')}`;
  runtimeElement.textContent = `Runtime: ${movieData[movieTitle].runtime} minutes`;
  ratingElement.textContent = `Rating: ${movieData[movieTitle].rating}`;
  yearElement.textContent = `Year: ${movieData[movieTitle].year}`;

  // Append the separate elements to the movie card div
  movieCardLine.appendChild(titleElement);
  movieCardLine.appendChild(plotElement);
  movieCardLine.appendChild(castElement);
  movieCardLine.appendChild(runtimeElement);
  movieCardLine.appendChild(ratingElement);
  movieCardLine.appendChild(yearElement);

  // Append the new div element to the flex container
  flexContainerGlobal.appendChild(movieCardLine);
}






//Shows an array as a String using space as separator
//const myArray = ['I', 'love', 'chocolate', 'frogs'];
//const madeAString = myArray.join(' ');
//console.log(madeAString);
// returns 'I love chocolate frogs'


//Example of arrow function
//const textBox = document.querySelector("#textBox");
//const output = document.querySelector("#output");
//textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);