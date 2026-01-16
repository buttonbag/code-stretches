const faveNumber = 5;

const userGuess = Number(prompt(`
  I'm thinking of a number from 1-100. What is the number?  
`));

// validate first if it's a number
if(isNaN(userGuess)){
  alert(`letters are not accepted`)
} else {

if(userGuess === 5) {
  alert(`you got it exactly!`)
} else if (userGuess <= 5) {
  alert(`too low`)
} else if (userGuess >= 5) {
  alert(`too high`)
}
}