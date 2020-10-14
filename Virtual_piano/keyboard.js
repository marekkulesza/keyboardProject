document.addEventListener("keydown", function(event) {
  if (event.code == "KeyA") {
      console.log("The 'a' key was pressed");
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyS") {
      console.log("The 's' key was pressed");
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyD") {
      console.log("The 'd' key was pressed");
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyF") {
      console.log("The 'f' key was pressed");
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyG") {
      console.log("The 'g' key was pressed");
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyH") {
      console.log("The 'h' key was pressed");
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyJ") {
      console.log("The 'j' key was pressed");
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code != "KeyA" && event.code != "KeyS" && event.code != "KeyD" && event.code != "KeyF" && event.code != "KeyG" && event.code != "KeyH" && event.code != "KeyJ") {
      console.log("A Key was pressed but not 'A S D F G H I'")
  }
})