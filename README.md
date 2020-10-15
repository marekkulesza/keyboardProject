# keyboardProject

making a website that plays like a keyboard

This was a project off of Jetbrains academy/ Hyperskills.org for the web developer stream


I used a python file to write some Js to save a little bit of time.

![alt text](https://github.com/marekkulesza/keyboardProject/blob/main/Virtual_piano/Virtual_piano.PNG?raw=true)

Javascript part was annoying as I was just learning it

Things that dont work 

document.addEventListener("keydown", function(event) {
  if (event.code != "KeyA", event.code != "Keys") {
      console.log("A Key was pressed but not 'A S D F G H I'")
  }
})

document.addEventListener("keydown", function(event) {
  if (event.code = "KeyA" || "KeyS" || "KeyD" || "KeyF" || "KeyG" || "KeyH" || "KeyJ") {
      console.log("A Key was pressed but not 'A S D F G H I'")
  }
})

This was the correct way

document.addEventListener("keydown", function(event) {
  if (event.code != "KeyA" && event.code != "KeyS") {
      console.log("A Key was pressed but not 'A S D F G H I'")
  }
})

