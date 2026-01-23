const bunnyNames = [`Sunny`, `Toki`, `Gigi`, `Frodo`, `Samwise`, `Merry`]


const addIsTheBest = (array) => {
  
  for(let i=0; i<array.length; i++) {
    console.log(array[i]+` is the best!`);
  }
}

addIsTheBest(bunnyNames);