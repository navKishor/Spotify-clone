console.log("welcome to Spotyfy");
let songIndex = 0;
let audioElement = new Audio('let1.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gify = document.getElementById('gify');

let song = [
    {songName: "Har-Har-Shambhu" , filepath:"project/let2.mp3"},
    {songName: "Dandelions" , filepath:"project/let3.mp3"},
    {songName: "kahani-Suno-2.0" , filepath:"project/let4.mp3"},
    {songName: "Namo-Namo-Shivaay" , filepath:"project/5.mp3"},
    {songName: "Tere-Liye" , filepath:"project/6.mp3"},
    {songName: "Channa" , filepath:"project/7.mp3"},
]

//audioElement.pause();

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gify.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');     
        gify.style.opacity = 0;

    }
} 

)

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;  
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

Array.from(document.getElementByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllplay();
        e:target.classList.remove('fa-circle-play');
        e:target.classList.add('fa-circle-pause');
        console.log(e.target);
        audioElement.src = 'let2.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
    })
});