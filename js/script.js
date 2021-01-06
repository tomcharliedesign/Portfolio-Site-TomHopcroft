console.log("Hello there - wecome to my portfolio")

var text1 = "I like pizza";

var text2 = "I prefer cookies";


var aboutMe = {
  name: "Tom",
  age: 28,
  hobbies: "Jiu jitsu, running, drinking"
}


function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
