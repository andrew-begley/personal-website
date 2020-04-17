function myFunction() {
    let x = document.getElementById("contactBar");
    if (x.style.width === "18vw") {
        x.style.width = "0vw";
    } else {
        x.style.width = "18vw";
    }
}

function scrollOn() {
    document.getElementById("scroll").style.display = "flex";
}

var mq = window.matchMedia( "(min-width: 800px)" );
if (mq.matches) {
    window.onload = function () {
        setTimeout(scrollOn, 10000);
    }
} 

function scrollOff() {
    document.getElementById("scroll").style.display = "none";
}

document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 40:
            scrollOff();
            break;
    }
}

console.log("hmu if you have tips/suggestions/questions on optimizing this site!");
