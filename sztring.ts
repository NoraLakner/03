// Függvény a véletlenszerű sztringválasztáshoz
function chooseRandomStrings(strings: string[]): string[] {
    const chosenStrings: string[] = [];
  
    while (chosenStrings.length < 3) {
      const randomIndex = Math.floor(Math.random() * strings.length);
      const randomString = strings[randomIndex];
  
      if (chosenStrings.indexOf(randomString) === -1) {
        chosenStrings.push(randomString);
      }
    }
  
    return chosenStrings;
  }
  
  function updateHtmlContent(resultStrings: string[]): void {
    // Eredmény sztringek megjelenítése
    const resultElement = document.getElementById('result');
    if (resultElement) {
      resultElement.innerHTML = resultStrings.map(str => `<li>${str}</li>`).join('');
    }
  }  