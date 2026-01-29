const bunnyNames = [`Sunny`, `Toki`, `Gigi`, `Frodo`, `Samwise`, `Merry`]


const addIsTheBest = (names) => {
  
  // for(let i=0; i<array.length; i++) {
  //   console.log(array[i]+` is the best!`);
  // }
  
  const statement = [];
  for (let name of names) { 
    console.log(`${name} is the best`);
    statement.push(`${name} is the best`);
    console.log(statement)
  } 
  return statement
}

addIsTheBest(bunnyNames);