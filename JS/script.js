let musics = [
    {title:"A Flute's Mourning", artist:"Aakash Gandhi", src:"SRC/A Flute's Mourning - Aakash Gandhi.mp3", img:"ASSETS/james-owen-oFHMk5fD8-s-unsplash-AFlutes.jpg"},

    {title:"Savior", artist:"Telecasted", src:"SRC/Savior - Telecasted.mp3", img:"ASSETS/jacek-dylag-hUHzaiAHuUc-unsplash-Savior.jpg"},
    
    {title:"Searching For Time", artist:"Telecasted", src:"SRC/Searching For Time - Telecasted.mp3", img:"ASSETS/ana-grave-gHcWaeldgtQ-unsplash-ForTime.jpg"}
]

const playBtn = document.querySelector('.playBtn');
const pauseBtn = document.querySelector('.pauseBtn');

let music = document.querySelector('audio');
let image = document.querySelector('img');
let nameMusic = document.querySelector('.description h2');
let nameArtist = document.querySelector('.description p');
let indexMusic = 0;

function renderMusic(index) {
    music.setAttribute('src', musics[index].src)
    music.addEventListener('loadeddata', () => {
        nameMusic.textContent = musics[index].title;
        nameArtist.textContent = musics[index].artist;
        image.src = musics[index].img;
    });
};

renderMusic(indexMusic);

music.addEventListener('timeupdate', () => {
    const progressBar = document.querySelector('progress');
    progressBar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';

    let timeMove = document.querySelector('.time-start');
    timeMove.textContent = formattedTime(Math.floor(music.currentTime));
});

music.addEventListener('loadeddata', () => {
    let timeDuretion = document.querySelector('.time-end') 
    timeDuretion.textContent = formattedTime(Math.floor(music.duration));
})

document.querySelector('.next').addEventListener('click', () => {
    indexMusic++;
    if(indexMusic > 2) {
        indexMusic = 0;
    }
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'block';
    renderMusic(indexMusic);
});

document.querySelector('.back').addEventListener('click', () => {
    indexMusic--;
    if(indexMusic < 0) {
        indexMusic = 2;
    }
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'block';
    renderMusic(indexMusic);
});


const playMusic = () =>{
    music.play();

    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
};

const pauseMusic = () =>{
    music.pause();

    pauseBtn.style.display = 'none';
    playBtn.style.display = 'block';
};

function formattedTime(seconds) {
    let areaMinutes = Math.floor(seconds / 60);
    let areaSeconds = seconds % 60;

    if (areaSeconds < 10) {
        areaSeconds =  '0' + areaSeconds;
    }

    return areaMinutes + ':' + areaSeconds;
};


