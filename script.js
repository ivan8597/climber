
let climber = document.querySelector(".climber")
// let clone =climber.cloneNode(true);
let lines = document.querySelectorAll(".line")
let currentPosition = 0



let box = document.createElement("div")
box.style.width = "9px"
box.style.height = "9px"
document.body.appendChild(box)
box.appendChild(climber)


document. addEventListener("keydown", (event) => {
  if (event.key === "z" || event.key=== "я" && currentPosition < lines.length) {
    lines[currentPosition].append(box)
    currentPosition += 1

    if (currentPosition === lines.length) {
      document.querySelector(".flag").style.visibility = "visible"
      
      document.querySelector(".you-win").style.visibility="visible"

    }
  }

  if (event.key === "x" || event.key==="ч" && currentPosition >=lines.length - 1) {
    currentPosition -= 1
    lines[currentPosition].appendChild(box)
  }
  else if (event.key === "x" || event.key==="ч" && currentPosition >=lines.length - 2) {
    currentPosition -= 1
    lines[currentPosition].appendChild(box)

  }
  else if (event.key === "x" || event.key==="ч" && currentPosition >=lines.length - 3) {
    currentPosition -= 1
    lines[currentPosition].appendChild(box)

  }
  else if (event.key === "x"||  event.key==="ч" && currentPosition >= lines.length - 4) {
    currentPosition -= 1
    lines[currentPosition].appendChild(box)

  }
 


})









































// function init() {
//   let coord = [
//       [75, 435],
//       [175, 330],
//       [285, 230],
//       [400, 200],
//       [510, 150],
//       [610, 60]
//   ];
//   let lines = document.querySelectorAll('.line');
//   for (let i = 0; i < lines.length; i++) {
//       lines[i].style.left = coord[i][0] + 'px';
//       lines[i].style.top = coord[i][1] + 'px';
//   }

//   let climber = document.querySelector('.climber');
//   climber.style.left = coord[0][0] + 'px';
//   climber.style.top = coord[0][1] + 'px';


// }

// window.addEventListener('keydown', (event)=> {
//   if (event.key === "x") {
//       if (currentPosition < lines.length) {
//           ++currentPosition;
//           climber.style.left = init[currentPosition][0] + 'px';
//           climber.style.top = init[currentPosition][1] + 'px';
//       }
//   } else if ( event.key === "z") {
//       if (currentPosition> 0) {
//           --currentPosition
//           climber.style.left = init[currentPosition][0] + 'px';
//           climber.style.top = init[currentPosition][1] + 'px';
//       }
//   }        
// })





