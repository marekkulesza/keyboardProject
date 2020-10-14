document.addEventListener("keydown", function(event) {
  if (event.code == "KeyA") 
  {
      console.log("The 'a' key was pressed");
      let audio = new Audio("audio/A.mp3");
      audio.play();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyS") 
  {
      console.log("The 's' key was pressed");
      let audio = new Audio("audio/S.mp3");
      audio.play();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyD") 
  {
      console.log("The 'd' key was pressed");
      let audio = new Audio("audio/D.mp3");
      audio.play();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyF") 
  {
      console.log("The 'f' key was pressed");
      let audio = new Audio("audio/F.mp3");
      audio.play();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyG") 
  {
      console.log("The 'g' key was pressed");
      let audio = new Audio("audio/G.mp3");
      audio.play();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyH") 
  {
      console.log("The 'h' key was pressed");
      let audio = new Audio("audio/H.mp3");
      audio.play();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyJ") 
  {
      console.log("The 'j' key was pressed");
      let audio = new Audio("audio/J.mp3");
      audio.play();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyW")
  {
      console.log("The 'W' key was pressed");
      let audio = new Audio("audio/W.mp3");
      audio.play();
  }
  });

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyE")
  {
      console.log("The 'E' key was pressed");
      let audio = new Audio("audio/E.mp3");
      audio.play();
  }
  });

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyT")
  {
      console.log("The 'T' key was pressed");
      let audio = new Audio("audio/T.mp3");
      audio.play();
  }
  });

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyY")
  {
      console.log("The 'Y' key was pressed");
      let audio = new Audio("audio/Y.mp3");
      audio.play();
  }
  });

document.addEventListener("keydown", function(event) {
  if (event.code == "KeyU")
  {
      console.log("The 'U' key was pressed");
      let audio = new Audio("audio/U.mp3");
      audio.play();
  }
  });

document.addEventListener("keydown", function(event) {
  if (event.code != "KeyA" && event.code != "KeyS" && event.code != "KeyD" && event.code != "KeyF" && event.code != "KeyG" && event.code != "KeyH" && event.code != "KeyJ" && event.code != "KeyW" && event.code != "KeyE" && event.code != "KeyT" && event.code != "KeyY" && event.code != "KeyU") {
      console.log("A Key was pressed but not 'A S D F G H I W E T Y U'")
  }
})