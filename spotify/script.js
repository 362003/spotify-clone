console.log("Welcome to Spotify");

//Initialize the Variables
let songindex=0;
let audioeElement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songs=[
    {songName: "Salam-e-Ishq",filePath:"song/1.mp3",covers/1.jpg}
    {songName: "Salam-e-Ishq",filePath:"song/2.mp3",covers/2.jpg}
    {songName: "Salam-e-Ishq",filePath:"song/3.mp3",covers/3.jpg}
    {songName: "Salam-e-Ishq",filePath:"song/4.mp3",covers/4.jpg}
    {songName: "Salam-e-Ishq",filePath:"song/5.mp3",covers/5.jpg}
    {songName: "Salam-e-Ishq",filePath:"song/6.mp3",covers/6.jpg}
    {songName: "Salam-e-Ishq",filePath:"song/7.mp3",covers/7.jpg}
    {songName: "Salam-e-Ishq",filePath:"song/8.mp3",covers/8.jpg}
    {songName: "Salam-e-Ishq",filePath:"song/9.mp3",covers/9.jpg}
    {songName: "Salam-e-Ishq",filePath:"song/10.mp3",covers/10.jpg}
]
//audioElement.play();

//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioeElement.paused || audioeElement.currenttime<=0){
         audioeElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioeElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0; 
    }
})
//Listen to Events
  audioElement.addEventListener('timeupdate', ()=>{
    //Update Seeker
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value *audioElement.duration/100;
})

