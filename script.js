let songs=[

{
title:"Song 1",
artist:"Artist One",
src:"music/song1.mp3",
cover:"images/cover1.jpg"
},

{
title:"Song 2",
artist:"Artist Two",
src:"music/song2.mp3",
cover:"images/cover2.jpg"
}

];

let index=0;

let audio=
document.getElementById("audio");

let title=
document.getElementById("title");

let artist=
document.getElementById("artist");

let cover=
document.getElementById("cover");

let progress=
document.getElementById("progress");

let volume=
document.getElementById("volume");

let playbtn=
document.getElementById("playbtn");

function loadSong(){

audio.src=
songs[index].src;

title.innerText=
songs[index].title;

artist.innerText=
songs[index].artist;

cover.src=
songs[index].cover;

}

loadSong();

function playPause(){

if(audio.paused){

audio.play();

playbtn.innerHTML="⏸";

}

else{

audio.pause();

playbtn.innerHTML="▶";

}

}

function nextSong(){

index++;

if(index>=songs.length)
index=0;

loadSong();

audio.play();

}

function prevSong(){

index--;

if(index<0)
index=songs.length-1;

loadSong();

audio.play();

}

audio.addEventListener(
"timeupdate",()=>{

progress.value=
(audio.currentTime/
audio.duration)*100;

});

progress.addEventListener(
"input",()=>{

audio.currentTime=
(progress.value/100)
*audio.duration;

});

volume.addEventListener(
"input",()=>{

audio.volume=
volume.value;

});

audio.addEventListener(
"ended",nextSong
);