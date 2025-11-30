for (let i = 1; i < 36; i++) {
  let original = document.getElementById("light0");
  let clone = original.cloneNode(true);
  clone.id = "";
  original.parentNode.appendChild(clone);
}



triggerNotes();

function triggerNotes() {

  document.getElementById("square-row").textContent = "";

  for (let i = 0; i < 60; i++) {
    let original = document.getElementById("squareX");
    let clone = original.cloneNode(true);
    clone.style.display = "flex";
    clone.id = "square" + i;
    document.getElementById("square-row").appendChild(clone);
  }
  
  
  let numNotes = Math.ceil( window.innerWidth / 54 ) - 1;

  let squareStartTime = 0;
  let squareEndTime = numNotes * ( 0.1 + 1 / 1.6 );

  let totalMuted = 0 // 8 + Math.floor(Math.random() * 8);
  let mutedArray = Array.from({ length: totalMuted }, () => Math.floor(Math.random() * 36) );

  let squareDirectionForward;

  if ( Math.random() > .5 ) {
    squareDirectionForward = true;
  } else {
    squareDirectionForward = false;
  }

  let colorPhase = 0;
  if ( Math.random() > .5 ) colorPhase = 1.43;

  for (let squareIndex = numNotes; squareIndex < 60; squareIndex++) {
      let thisSquare = document.getElementById("square" + squareIndex);
      thisSquare.style.display = "none";
  }

  for (let squareIndex = 0; squareIndex < numNotes; squareIndex++) {
    
    squareStartTime += 0.1 + Math.random() / 1.6;

    let thisSquare = document.getElementById("square" + squareIndex);
    thisSquare.style.display = "flex";
    thisSquare.style.opacity = "1";

    for (let lightIndex = 0; lightIndex < 36; lightIndex++) {

      thisSquare.children.item(lightIndex).style.backgroundColor = "black";

      if (mutedArray.includes(lightIndex)) continue;

      let colorsThere = [ "#000000", "#390643", "#67103F", "#8B1C38", "#B82A31", "#CC4B33", "#E07338"];
      let colorsBack = ["#CC4B33", "#B82A31", "#8B1C38", "#67103F", "#390643", "#000000"];

      let randomNumber = Math.random() * .010;

      let numberForLightBetween0and1 = Math.abs ( Math.sin(lightIndex * ( .045 + randomNumber) + colorPhase ) );

      if (numberForLightBetween0and1 > 0.88) {
        colorsThere.splice(-4);
        colorsBack = colorsBack.splice(4);
      } else if (numberForLightBetween0and1 > 0.75) {
        colorsThere.splice(-3);
        colorsBack = colorsBack.splice(3);
      } else if (numberForLightBetween0and1 > 0.5) {
        colorsThere.splice(-2);
        colorsBack = colorsBack.splice(2);
      } else if (numberForLightBetween0and1 > 0.25) {
        colorsThere.splice(-1);
        colorsBack = colorsBack.splice(1);
      }

      colorsThere.forEach(function (colorThere, colorIndex) {
        
        let thisLight;

        if (squareDirectionForward) {
          thisLight = thisSquare.children.item(35 - lightIndex);
        } else {
          thisLight = thisSquare.children.item(lightIndex);
        }

        var logScaling = Math.log(lightIndex + 1) / 6;

        function isEven(n) {
           return n % 2 == 0;
        }

        let lightDuration;

        if ( isEven(lightIndex) ) {
          lightDuration = .35;
        } else {
          lightDuration = .15;
        }

        gsap.to(thisLight, {
          duration: lightDuration,
          backgroundColor: colorThere,
          delay: squareStartTime + logScaling + lightIndex * 0.01,
        });
      });

      colorsBack.forEach(function (colorBack, colorIndex) {
        let thisLight = thisSquare.children.item(lightIndex);
        gsap.to(thisLight, {
          duration: 0.2 + 0.3 * colorIndex,
          backgroundColor: colorBack,
          delay:
            squareStartTime * 0.01 +
            squareEndTime +
            0.02 * (35 - lightIndex)
        });
      });
    }
  }
  var delayedCall = gsap.delayedCall(squareEndTime + 2.5, triggerNotes);
}

var doit;

function resizeWindow() {
  for (let squareIndex = 0; squareIndex < 60; squareIndex++) {
      let thisSquare = document.getElementById("square" + squareIndex);
      thisSquare.style.opacity = "0";
  }
  clearTimeout(doit);
  doit = setTimeout(resizedw, 1000);  
}
function resizedw(){
  gsap.killTweensOf(triggerNotes);
  triggerNotes();
}

window.onresize = resizeWindow;