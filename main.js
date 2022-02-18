
var playbtn = document.getElementById('play').addEventListener('click', game);
function game() {

    var random1 = Math.floor(Math.random() * 6) + 1;
    var random2 = Math.floor(Math.random() * 6) + 1;
    //console.log(random)
    var randomimg1 = "dice" + random1 + ".png";
    var imgsrc1 = "images/" + randomimg1;

    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute('src', imgsrc1);

    var randomimg2 = "dice" + random2 + ".png";
    var imgsrc2 = "images/" + randomimg2;

    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute('src', imgsrc2)

    if (random1 > random2) {
        document.querySelector('h1').innerHTML = "PLAYER-1 WINS👍"
    }
    else if (random2 > random1) {
        document.querySelector('h1').innerHTML = "PLAYER-2 WINS👍"

    }
    else {
        document.querySelector('h1').innerHTML = "DRAW👍"
    }

}

