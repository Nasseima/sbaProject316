// const audio = new Audio ();
// audio.src = "Chronic Law - Uncomfort To Lies _ Audio (256).mp3"
// const button = document.querySelector("button");

// button.forEach(button =>{
//     button.addEventlistener("click", () => {
//         audio.play();
//     });
// });
//Code from html added here !!
//<button onmousedown="audio.play()" onmouseleave="audio.stop()" class="btn"><img width="50px" height="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtsKxTUuqOwPPgUvMll3w99Gd8DcS7uv-og&s" alt=""> </button>

const audio = document.querySelector('.songbtn');
const playPauseBTN = document.querySelector ('.playPauseBTN');
let count = 0;

console.dir(audio)

function playPause(){
    if (count == 0) {
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pause &#9208;";
    }else{
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Play &#9658;";
    }
}
function stop(){
    playPause();
    audio.pause();
    audio.currentTime = 0;
    console.log(audio.currentTime)
    playPauseBTN.innerHTML = "Play &#9658;";
}


const card = document.querySelector(".back")
const audio1 = document.querySelector(".songbtn")
card.append(audio1)

console.log(card, audio1)

let name = document.getElementById('name');
console.log(name)