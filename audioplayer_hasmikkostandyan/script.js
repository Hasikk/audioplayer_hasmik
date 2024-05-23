let data={
    title: ['Back to black',
    'La boheme',
    'Cleaning out my closet',
    'Stan',
    'Just the two of us',
    'Mirrors',
    'Popular'],
    song:['music/Amy Winehouse – Back To Black.mp3',
    'music/Charles Aznavour – La bohème.mp3',
    'music/Eminem – Cleanin_ Out My Closet.mp3',
    'music/Eminem ft. Dido - Stan (Remastered).mp3',
    'music/Grover Washington, Jr., Bill Withers - Just the Two of Us.mp3',
    'music/Justin Timberlake – Mirrors.mp3',
    'music/The Weeknd, Madonna, Playboi Carti – Popular.mp3'],
    poster: [
        "https://www.tekstowo.pl/upload/soundtracks/49299_big.webp?v=1712875878",
        "https://upload.wikimedia.org/wikipedia/en/6/69/La_boh%C3%A8me_album.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQfStm738yeBmgzgsO_VKAHeZvxL_AKCnGkLhvyO4mg&s",
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Eminem_-_Stan_CD_cover.jpg/220px-Eminem_-_Stan_CD_cover.jpg",
        'https://upload.wikimedia.org/wikipedia/en/6/64/Just_the_Two_of_Us_single.jpg',
        'https://m.media-amazon.com/images/M/MV5BZTJjNDA0YzUtZDVmZS00M2JmLThiNzAtYjAyMWEwZjM0MDdmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZj5g0F3T-d5VjeOrdnszSlYnXKQ37txbixlOp2b-lcw&s'
    ]
}

let song=new Audio()
window.onload=function(){
    playSong()
}


currentSong=0

function playSong(){
    song.src=data.song[currentSong]
    let songTitle=document.getElementById('songtitle')
    songTitle.textContent=data.title[currentSong]
    let img=document.getElementsByClassName('row1')
    img[0].style.backgroundImage='url('+data.poster[currentSong]+")"
    let main=document.getElementsByClassName("main")
    main[0].style.backgroundImage='url('+data.poster[currentSong]+")"
    song.play()
}

function playOrPauseSong(){
    let play=document.getElementById('play')
    if(song.paused){
        song.play()
        play.src='images/pause.png'
    }
    else{
        song.pause()
        play.src='images/play-button-arrowhead.png'
    }
}

song.addEventListener('timeupdate',function(){
    // console.log(song.currentTime)
    // console.log(song.duration)
    let fill=document.getElementsByClassName('fill')
    let position=song.currentTime/song.duration
    fill[0].style.width=position*100+'%'
    convertTime(song.currentTime)
    if (song.ended){
        next()
    }
})

function convertTime(seconds){
    currentTime=document.getElementsByClassName('currentTime')
    let min=Math.floor(seconds/60)
    let sec=Math.floor(seconds%60)

    min=(min<10) ? "0"+min:min
    sec=(sec<10) ? "0"+sec:sec
    currentTime[0].textContent=min+':'+sec

    totalTime(song.duration)
}   


function totalTime(seconds){
    let min=Math.floor(seconds/60)
    let sec=Math.floor(seconds%60)
    min=(min<10) ? "0"+min:min
    sec=(sec<10) ? "0"+sec:sec
    currentTime[0].textContent+=" / "+min+':'+sec
}


function prev(){
    currentSong-=1
    if(flag == true){
        currentSong = currentSong-1
    }if(shuff == true){
        currentSong = Math.floor(Math.random() * data.song.length);
    }
    if (sorted==true){
        
    }  if(currentSong>=data.song.length){
        currentSong=0
    }
    if(currentSong<0){
        currentSong=data.song.length-1
    }
    playSong()
}

let shuff=false
let shuffle = document.getElementById("shuffleButton")
let sorted=true
let sort = document.getElementById("sortButton")
let flag  = false
let repeat = document.getElementById("repeatButton")


shuffle.addEventListener('click',function(){
    shuff=true
    flag=false
    sorted=false
})


repeat.addEventListener("click",function(){
flag = true
shuff=false
sorted=false
})


sort.addEventListener("click",function(){
    flag = false
    shuff=false
    sorted=true
    })
    

function next(){
    currentSong+=1
    if(flag == true){
        currentSong = currentSong-1
    }if(shuff == true){
        currentSong = Math.floor(Math.random() * data.song.length);
    }
    if (sorted==true){

    }  if(currentSong>=data.song.length){
        currentSong=0
    }
    playSong()

}

let mutes=document.getElementById('mute')
function mute(){
    if (song.muted){
        song.muted=false
        mutes.src='images/volume.png'
    }else{
        song.muted=true
        mutes.src='images/volume-mute.png'
    }

}

function decrease(){
    song.volume-=0.2
    if (song.volume<=0.2){
        song.volume=0
        mutes.src='images/volume-mute.png'
    }
}

function increase(){
    song.volume+=0.2
    if (song.volume>0.2){
        mutes.src='images/volume.png'
    }
}


function seekTo(event) {
    const fill = document.querySelector('.fill');
    const handle = document.querySelector('.handle');
    const seekBar = document.querySelector('.seek-bar');

    const seekWidth = seekBar.offsetWidth;
    const seekBarRect = seekBar.getBoundingClientRect();
    const fillWidth = event.clientX - seekBarRect.left;
    const newPosition = fillWidth / seekWidth;

    const newTime = newPosition * song.duration;
    song.currentTime = newTime;

    fill.style.width = newPosition * 100 + '%';
    handle.style.left = newPosition * 100 + '%';

    convertTime(newTime);
}


function searchSong() {
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let matchingIndexes = [];
    for (let i = 0; i < data.title.length; i++) {
        if (data.title[i].toLowerCase().includes(searchTerm)) {
            matchingIndexes.push(i);
        }
    }
    if (matchingIndexes.length > 0) {
        currentSong = matchingIndexes[0];
        playSong();
        play.src='images/pause.png'
        
    } else {
        alert('No matching song found!');
    }
}

