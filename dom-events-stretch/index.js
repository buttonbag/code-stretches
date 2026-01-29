const title = document.querySelector('#title');
const body = document.querySelector('body');

// changecolor function
function changeColor() {
  // toggle background color on click
  // toggle class names
  if (body.classList == 'blue') {
    body.classList.remove('blue')
  } else {
    body.classList.add('blue')
  }
}

// create click event listener
title.addEventListener('click', changeColor);