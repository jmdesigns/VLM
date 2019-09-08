var acc = this.document.getElementById('autocomplete');
var input = document.getElementById('input');

const wordList = ["america", "baby", "banana", "bomb", "hell", "hello", "holler", "hundred", "water", "wonder", "world"];

var clicked = false;

input.addEventListener('focus', handleFocusIn);
input.addEventListener('focusout', handleFocusOut);

input.addEventListener('input', getWords);

function handleFocusIn() {
    acc.className = 'autocomplete autocomplete--visible';
    getWords();
}

function handleFocusOut() {
    acc.className = 'autocomplete autocomplete--hidden';
}

function getWords() {
    var val = input.value;
    var selWords = [];

    if(val.length >= 3) {
        for(var i = 0; i < wordList.length; i++) {
            if(wordList[i].indexOf(val) === 0) {
                selWords.push(wordList[i]);
            }
        }
    }

    addWords(selWords);
    console.log(selWords);
}

function addWords(list) {
    removeAllChildren(acc);

    for(var i = 0; i < list.length; i++){
        var cont = document.createElement('div');
        var fill1 = document.createElement('div');
        var text = document.createElement('p');
        var fill2 = document.createElement('div');

        cont.className = 'autocomplete_container'
        fill1.className = 'autocomplete_container__fill';
        fill2.className = 'autocomplete_container__fill';

        var textVal = document.createTextNode(list[i]);
        text.appendChild(textVal);

        text.addEventListener('mousedown', handleTextChange);

        cont.appendChild(fill1);
        cont.appendChild(text);
        cont.appendChild(fill2);

        acc.appendChild(cont);
    }
}

function removeAllChildren(el) {
    while(el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

function handleTextChange(e) {
    input.value = e.target.innerHTML;
}