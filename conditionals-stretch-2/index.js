const magicWord = () => {
  const word = prompt(`guess the magic word`);
  if (word === `test`) {
    alert(`you got it!`)
    return
  } else {
    magicWord()
  }
}

magicWord();