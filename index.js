for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }); //when we click (click argument) it will execute the handle click function as it is an argument of addEventListener method.
  //adding function as an argument is called as higher funtions.
}

//detacting keyboard press
document.addEventListener("keypress", function (event) {
  makesound(event.key);
  buttonAnimation(event.key);
});
//when we click (click argument) it will execute the handle click function as it is an argument of addEventListener method.

function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "q":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "o":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey){
   var activeButton= document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },100);
}

/*var audio = new Audio('sounds/tom-1.mp3'); //creating audio object  
    //it constructs the HTML <audio>element 
    audio.play(); //play method to play a sound*/
