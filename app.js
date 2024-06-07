const audio = document.getElementsByClassName('songbtn');
const playPauseBTN = document.getElementsByClassName('playPauseBTN');
const stopBtn = document.getElementsByClassName('stop')

function pause(index) {
    audio[index].pause();
    audio[index].currentTime = 0;
}

function play(index){
    audio[index].play();
}

for(let i = 0; i < playPauseBTN.length; i++) {
    playPauseBTN[i].addEventListener('click', (event) => {
        event.preventDefault();
        play(i)
    })
} 

for(let i = 0; i < stopBtn.length; i++) {
    stopBtn[i].addEventListener('click', (event) => {
        event.preventDefault();
        pause(i)
    })
} 



const card = document.querySelector("#back")
const audio1 = document.querySelector(".songbtn")
card.append(audio1)


let name = document.getElementById('name');

window.open("https://music.apple.com/us/browse", "popup")
const windowFeatures = "left=100, top=100, width=100, height=100"