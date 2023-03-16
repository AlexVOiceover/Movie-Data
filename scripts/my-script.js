console.log("Initialising console");

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

const article1 = document.querySelector('#article1');
const article2 = document.querySelector('#article2');
const article3 = document.querySelector('#article3');

button1.addEventListener('click', () => {
  toggleVisibility(article1);
	});

button2.addEventListener('click', () => {
	toggleVisibility(article2);
});

button3.addEventListener('click', () => {
	toggleVisibility(article3);
});

function toggleVisibility(param1) {

  const computedStyle = getComputedStyle(param1);
  
  if (computedStyle.display === "none" ) {
    param1.style.display = "inline-block";
  } else {
    param1.style.display = "none";
  }

}