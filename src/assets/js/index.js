function toggleMenu() {
  const el = document.getElementById("menu-items");
  if (el.style.display == "flex") {
    el.style.display = "none";
  } else {
    el.style.display = "flex";
  }
}

const el = document.getElementById("menu-button");
el.addEventListener("click", toggleMenu, false);

const yt = document.getElementById("youtube-overlay-play");
yt.addEventListener("click", playVideo, false);

function playVideo() {
  const el = document.getElementById("youtube-overlay");

  const youtubeDiv = document.getElementById("youtube-div");

  setTimeout(() => {
    el.style.display = "none";
    youtubeDiv.style.opacity = "100";
  }, 200);

  var div = document.getElementById("youtube-overlay-and-video");
  var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  iframe.postMessage('{"event":"command","func":"' + "playVideo" + '","args":""}', "*");
}

/*
  Choose your own price slider for the Buy Now Section
*/

const tickValues = [50, 60, 75, 100, 150];
const ticksTotal = tickValues.length;

const tickContainer = document.getElementById("tick-container");
const baseTick = document.getElementById("base-tick");

const labelContainer = document.getElementById("label-container");
const baseLabel = document.getElementById("base-label");

const sliderContainer = document.getElementById("slider-container");
const sliderTrack = document.getElementById("slider-track");
const sliderProgress = document.getElementById("slider-progress");
const sliderThumb = document.getElementById("slider-thumb");
const sliderValue = document.getElementById("slider-value");

let sliderWidth = sliderContainer.clientWidth;

let mouseDownOnThumb = false;
let waitingAfterTrackClick = false;

sliderThumb.style.left = "0px";

tickValues.forEach(function (number, index) {
  const tickDiv = baseTick.cloneNode(true);
  tickDiv.removeAttribute("id");

  tickContainer.appendChild(tickDiv);

  const tickPosition = (index * sliderWidth) / (ticksTotal - 1);

  tickDiv.style.left = `${tickPosition}px`;

  tickDiv.addEventListener("pointerup", () => {
    snapThumbAndProgressToTick(index);
  });

  if (index == 0 || index == ticksTotal - 1) {
    const labelDiv = baseLabel.cloneNode(true);
    labelDiv.removeAttribute("id");

    labelContainer.appendChild(labelDiv);

    labelDiv.textContent = "$" + number;

    labelDiv.style.left = `${tickPosition}px`;

    labelDiv.addEventListener("pointerup", () => {
      snapThumbAndProgressToTick(index);
    });
  }
});

baseTick.remove();
baseLabel.remove();

const getClosestTick = (progressRatio) => {
  let closestTick = 0;
  let minDifference = Math.abs(progressRatio - closestTick);

  for (let i = 1; i < tickValues.length; i++) {
    const difference = Math.abs(progressRatio - i / (ticksTotal - 1));
    if (difference < minDifference) {
      minDifference = difference;
      closestTick = i;
    }
  }
  return closestTick;
};

const snapThumbAndProgressToTick = (tickIndex) => {
  const snappedPosition = tickIndex * (sliderWidth / (ticksTotal - 1));
  sliderThumb.style.left = `${snappedPosition}px`;
  sliderProgress.style.width = `${snappedPosition}px`;
};

const updatePriceToSliderValue = (sliderValueInt) => {
  let sliderThumbRect = sliderThumb.getBoundingClientRect();

  const confettiOriginX = sliderThumbRect.right / window.innerWidth;
  const confettiOriginY = sliderThumbRect.top / window.innerHeight;

  const sliderValuePrevious = parseInt(sliderValue.textContent.slice(1));
  sliderValue.textContent = "$" + sliderValueInt;

  const buyButton = document.getElementById("buy-button");

  const url = new URL(buyButton.href, window.location.origin);

  let variation = null;
  if (sliderValueInt === 60) variation = "sixty-dollars";
  else if (sliderValueInt === 75) variation = "seventy-five-dollars";
  else if (sliderValueInt === 100) variation = "hundred-dollars";
  else if (sliderValueInt === 150) {
    variation = "hundred-fifty-dollars";
    if (sliderValuePrevious !== sliderValueInt) {
      window.confetti({
        particleCount: 200,
        spread: 70,
        origin: { x: confettiOriginX, y: confettiOriginY },
      });
    }
  }

  if (variation) url.searchParams.set("mb_variation_id", variation);
  else url.searchParams.delete("mb_variation_id");

  buyButton.setAttribute("href", url.pathname + url.search);
};

sliderThumb.addEventListener("pointerdown", () => {
  document.documentElement.style.touchAction = "none";
  mouseDownOnThumb = true;
});

document.addEventListener("pointermove", (event) => {
  if (
    mouseDownOnThumb &&
    parseInt(sliderThumb.style.left) >= 0 &&
    parseInt(sliderThumb.style.left) <= sliderWidth &&
    !waitingAfterTrackClick
  ) {
    const parentRect = sliderContainer.getBoundingClientRect();
    const offsetXRelativeToParent = event.clientX - parentRect.left;

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    snapThumbAndProgressToTick(getClosestTick(offsetXRelativeToParent / sliderWidth));

    const progressRatio = sliderProgress.clientWidth / sliderWidth;
    updatePriceToSliderValue(tickValues[getClosestTick(progressRatio)]);
  }
});

sliderTrack.addEventListener("pointerdown", (event) => {
  document.documentElement.style.touchAction = "none";
  mouseDownOnThumb = true;

  waitingAfterTrackClick = true;

  const timeoutClientX = event.clientX;

  setTimeout(() => {
    if (waitingAfterTrackClick) {
      waitingAfterTrackClick = false;
      const pointerMoveEvent = new PointerEvent("pointermove", {
        clientX: timeoutClientX,
      });
      sliderContainer.dispatchEvent(pointerMoveEvent);
    }
  }, 120);
});

sliderTrack.addEventListener("pointerup", (event) => {
  waitingAfterTrackClick = false;

  const progressRatio = event.offsetX / sliderWidth;

  updatePriceToSliderValue(tickValues[getClosestTick(progressRatio)]);

  snapThumbAndProgressToTick(getClosestTick(progressRatio));
});

document.addEventListener("pointerup", () => {
  document.documentElement.style.touchAction = "auto";
  mouseDownOnThumb = false;

  const progressRatio = sliderProgress.clientWidth / sliderWidth;

  updatePriceToSliderValue(tickValues[getClosestTick(progressRatio)]);

  snapThumbAndProgressToTick(getClosestTick(progressRatio));
});

// Match the $Value set in the HTML for intital position (assuming that and the href already match)
const valueSetInHTML = parseInt(sliderValue.innerText.slice(1));
snapThumbAndProgressToTick(tickValues.indexOf(valueSetInHTML));

window.addEventListener("resize", function () {
  sliderWidth = sliderContainer.clientWidth;

  const valueSetInHTML = parseInt(sliderValue.innerText.slice(1));
  snapThumbAndProgressToTick(tickValues.indexOf(valueSetInHTML));

  const ticks = tickContainer.children;
  const labels = labelContainer.children;

  let i = 0;

  for (const tick of ticks) {
    const tickPosition = (i * sliderWidth) / (ticksTotal - 1);
    tick.style.left = `${tickPosition}px`;

    if (i == 0) {
      labels[0].style.left = `${tickPosition}px`;
    }

    if (i === ticksTotal - 1) {
      labels[1].style.left = `${tickPosition}px`;
    }
    i++;
  }
});

function myLoadedFunction() {
  const resizeEvent = new Event("resize");

  window.dispatchEvent(resizeEvent);
}
window.onload = myLoadedFunction;
