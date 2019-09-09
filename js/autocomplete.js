var acc = this.document.getElementById('autocomplete');
var input = document.getElementById('input');

const wordList = ["america", "baby", "baboon", "baboons","banana", "bandana", "bomb", "hell", "hello", "holler", "hundred", "hunter", "water", "wonder", "wonton", "world"];

var clicked = false;

input.addEventListener('focus', function() {
    acc.className = 'autocomplete autocomplete--visible';
    getWords();
});
input.addEventListener('focusout', function() {
    acc.className = 'autocomplete autocomplete--hidden';
});

input.addEventListener('input', getWords);

function getWords() {
    var val = input.value;
    var selWords = [];

    if(val.length >= 3) {
        for(var i = 0; i < wordList.length; i++) {
            if(wordList[i].indexOf(val.toLocaleLowerCase()) === 0) {
                selWords.push(wordList[i]);
            }
        }
    }

    addWords(selWords);
}

function addWords(list) {
    while(acc.firstChild) {
        acc.removeChild(acc.firstChild);
    }

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

        text.addEventListener('mousedown', function(e) {
            input.value = e.target.innerHTML;
        });

        cont.appendChild(fill1);
        cont.appendChild(text);
        cont.appendChild(fill2);

        acc.appendChild(cont);
    }
}