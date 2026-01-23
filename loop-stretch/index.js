// const bunnyNames = () => {
//   for (let i = 1; i <= 20; i++) {
//     console.log(`Floofer ${i}`);
//   }
// }

// bunnyNames()

let isCorrect = false;

while (!isCorrect) {
  console.log(isCorrect);
  const theNumber = prompt(`Guess the number`);

  if (theNumber === `5`) {
    isCorrect = true;
    console.log(isCorrect);
  }
}