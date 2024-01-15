var obj = document.querySelectorAll("button");

for (var c = 0; c < obj.length; c++) {
    obj[c].addEventListener("click", clicked);
}
function clicked() {
    // console.log(this);
    var buttonText = this.innerHTML;
    makeSound(buttonText);
    buttonPressed(buttonText);

}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonPressed(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log("No Audio");
            break;
    }
}

function buttonPressed(key){

    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}
