// _________ MY SOLUTION:

let perCentText = document.querySelector("span");
let textDiv = document.querySelector(".loading-text");
let backgroundImg = document.querySelector(".bg");

let perCentIndex = 0;

let displayIndexNums = setInterval(perCentAugmenter, 30);

function perCentAugmenter() {
  perCentIndex++;

  if (perCentIndex > 99) {
    clearInterval(displayIndexNums);
  }
  perCentText.textContent = perCentIndex;

  let dividedIndex = perCentIndex / 5;
  textDiv.style.opacity = `${1 - 0.01 * perCentIndex}`;
  backgroundImg.style.filter = `blur(${20 - dividedIndex}px)`;
  console.log(`${20 - dividedIndex}px`);
}

//______ UDEMY SOLUTION:

/*
########################### !!! SCALE METHOD IS EXTREMELY IMPORTANT HERE !!! #############################
*/

/*
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
*/
