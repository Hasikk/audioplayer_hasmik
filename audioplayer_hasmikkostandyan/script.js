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
