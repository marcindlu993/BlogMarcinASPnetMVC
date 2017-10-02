var sentence = "Hasło do odgadnięcia";
sentence = sentence.toUpperCase();
var countSentence = sentence.length;
var sentence1 = "";
var gallowsCounter = 0;
var yes = new Audio("~/Content/sounds/gallows/yes.wav");
var no = new Audio("~/Content/sounds/gallows/no.wav");

for (var i = 0; i < countSentence; i++) {
    if (sentence.charAt(i) == " ") sentence1 = sentence1 + " ";
    else sentence1 = sentence1 + "-";
}
function writeSentence() {
    document.getElementById("boardGallows").innerHTML = sentence1;
}

window.onload = start;

var letters = new Array(35);
letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";

function start() {
    var divContent = "";

    for (var i = 0; i < 35; i++) {
        divContent = divContent + '<div id="letter' + i + '" class="letter" onclick="checkLetter(' + i + ')">' + letters[i] + '</div>';
        if (((i + 1) % 7) == 0) divContent = divContent + '<div style="clear:both;"></div>'
    }
    document.getElementById("alphabet").innerHTML = divContent;


    writeSentence();
}

function checkLetter(letternr) {
    var flag = false;
    for (var i = 0; i < countSentence; i++) {
        if (letters[letternr] == sentence.charAt(i)) {
            sentence1 = sentence1.replaceLetter(i, letters[letternr])
            flag = true;
        }
    }
    if (flag == true) {
        yes.play();
        document.getElementById("letter" + letternr).style.background = "#003300";
        document.getElementById("letter" + letternr).style.color = "#00C000";
        document.getElementById("letter" + letternr).style.border = "#00C000";
        document.getElementById("letter" + letternr).style.cursor = "default";
        writeSentence();
    }
    else {
        no.play();
        document.getElementById("letter" + letternr).style.background = "#330000";
        document.getElementById("letter" + letternr).style.color = "#C00000";
        document.getElementById("letter" + letternr).style.border = "#C00000";
        document.getElementById("letter" + letternr).style.cursor = "default";
        document.getElementById("letter" + letternr).setAttribute("onclick", ";");
        setGallows();
    }
    if (sentence == sentence1) document.getElementById("alphabet").innerHTML = 'Brawo! Wygrałeś! <br /><span class="reset" onclick="location.reload()"> JESZCZE RAZ?</span>';
}

String.prototype.replaceLetter = function (place, letter) {
    if (place > this.length - 1) return this.toString();
    else return this.substr(0, place) + letter + this.substr(place + 1);
}


function setGallows() {
    if (gallowsCounter < 9) {
        gallowsCounter++;
        document.getElementById("gallows").innerHTML = '<img src="/Content/img/gallows/s' + gallowsCounter + '.jpg" />';
    }
    else document.getElementById("alphabet").innerHTML = 'Przegrana! <br /><span class="reset" onclick="location.reload()"> JESZCZE RAZ?</span>';;
}