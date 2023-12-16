// Függvény a véletlenszerű sztringválasztáshoz
function chooseRandomStrings(strings) {
    var chosenStrings = [];

    while (chosenStrings.length < 3) {
        var randomIndex = Math.floor(Math.random() * strings.length);
        var randomString = strings[randomIndex];
      
        if (chosenStrings.indexOf(randomString) === -1) {
            chosenStrings.push(randomString);
        }
    }
    return chosenStrings;
}

function updateHtmlContent(resultStrings) {

    var resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = resultStrings.map(function (str) { return "<li>".concat(str, "</li>"); }).join('');
    }
}
