console.log("Hello there - wecome to my portfolio")

var text1 = "I like pizza";

var text2 = "I prefer cookies";


var aboutMe = {
  name: "Tom",
  age: 28,
  hobbies: "Jiu jitsu, running, drinking"
}


function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
