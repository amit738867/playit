


const music = new Audio('assets/audio/20.mp3');





// music.play();
const songs = [
    {
        //dummy
    },
    
    {
        id: '1', 
        songName: 'Naina Ashq Na Ho',
        artist: 'arijit singh',
        poster: "assets/img/arijit/1.jpg"
    },
    
    {
        id: '2', 
        songName: 'Khairiyat',
        artist: 'arijit singh',
        poster: "assets/img/arijit/2.jpg"
    },
    
    {
        id: '3', 
        songName: 'Desh Mere',
        artist: 'arijit singh',
        poster: "assets/img/arijit/3.jpg"
    },
    
    {
        id: '4', 
        songName: 'Dhoka',
        artist: 'arijit singh',
        poster: "assets/img/arijit/4.jpg"
    },
    
    {
        id: '5', 
        songName: 'Tera Yaar Hu Main',
        artist: 'arijit singh',
        poster: "assets/img/arijit/5.jpg"
    },
    
    
    {
        id: '6', 
        songName: 'Chunar',
        artist: 'arijit singh',
        poster: "assets/img/arijit/6.jpg"
    },
    
    {
        id: '7', 
        songName: 'Galti Se Mistake',
        artist: 'arijit singh',
        poster: "assets/img/arijit/7.jpg"
    },
    
    {
        id: '8', 
        songName: 'Hamari Adhuri Kahani',
        artist: 'arijit singh',
        poster: "assets/img/arijit/8.jpg"
    },
    
    {
        id: '9', 
        songName: 'Neki Ki Raah',
        artist: 'arijit singh',
        poster: "assets/img/arijit/9.jpg"
    },
    
    {
        id: '10', 
        songName: 'Hamdard',
        artist: 'arijit singh',
        poster: "assets/img/arijit/10.jpg"
    },
    
    {
        id: '11', 
        songName: 'Mere Yaaraa',
        artist: 'arijit singh',
        poster: "assets/img/arijit/11.jpg"
    },
    
    {
        id: '12', 
        songName: 'Nashe Si Chadh Gayi',
        artist: 'arijit singh',
        poster: "assets/img/arijit/12.jpg"
    },
    
    {
        id: '13', 
        songName: 'Ae Watan',
        artist: 'arijit singh',
        poster: "assets/img/arijit/13.jpg"
    },
    
    {
        id: '14', 
        songName: 'Agar Tum Sath Ho',
        artist: 'arijit singh',
        poster: "assets/img/arijit/14.jpg"
    },
    
    {
        id: '15', 
        songName: 'Pachtaoge',
        artist: 'arijit singh',
        poster: "assets/img/arijit/15.jpg"
    },

]

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1422443512.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2955438802.
Array.from(document.querySelectorAll('#song_item')).forEach((e, i) => {
    
    e.getElementsByTagName('img')[0].src = songs[i+1].poster;
    e.querySelector('h5 span').innerHTML = songs[i+1].songName;
    e.querySelector('#subtitle').innerHTML = songs[i+1].artist;
    
})


let masterPlay = document.getElementById('MasterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{

    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.innerHTML = '<path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />'

      
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.innerHTML = '<path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />'
}
})

let index =1;

const makeAllBg = ()=>{
    Array.from(document.querySelectorAll('#song_item')).forEach((e)=>{
        e.style.backgroundColor = 'transparent';
    })
}


const makeAllPlay = () => {
    for(let i = 1; i < songs.length; i++){
        document.getElementById(`${i}`).innerHTML = '<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />';
    }
}


Array.from(document.getElementsByClassName('size-6 absolute right-[25px]')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
            index = el.target.id;
            console.log(index);
            music.src = `assets/audio/arijit/${index}.mp3`;
            music.play();
            document.getElementById('poster_master_play').src = `assets/img/arijit/${index}.jpg`;
            document.getElementById('master_name_playing').innerText = songs[index].songName;
            document.getElementsByClassName('text-[10px] text-[#4c5262] master')[0].innerText = songs[index].artist;
            wave.classList.add('active1');
            masterPlay.innerHTML = '<path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />'
            makeAllBg();
            Array.from(document.querySelectorAll('#song_item'))[index-1].style.backgroundColor = '#6969691a';
            makeAllPlay();
            document.getElementById(`${index}`).innerHTML = '<path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />'
            document.getElementById('downn').href = `assets/audio/arijit/${index}.mp3`;
            document.getElementById('downn').download = `${songs[index].songName} - ${songs[index].artist}.mp3`;
          
            
    })
})
Array.from(document.getElementsByClassName('size-6 absolute cursor-pointer transition-[0.3s] duration-[linear] opacity-0')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
            index = el.target.id;
            console.log(index);
            music.src = `assets/audio/arijit/${index}.mp3`;
            music.play();
            document.getElementById('poster_master_play').src = `assets/img/arijit/${index}.jpg`;
            document.getElementById('master_name_playing').innerText = songs[index].songName;
            document.getElementsByClassName('text-[10px] text-[#4c5262] master')[0].innerText = songs[index].artist;
            wave.classList.add('active1');
            masterPlay.innerHTML = '<path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />'
            makeAllBg();
            Array.from(document.querySelectorAll('#song_item'))[index-1].style.backgroundColor = '#6969691a';
            document.getElementById('downn').href = `assets/audio/arijit/${index}.mp3`;
            document.getElementById('downn').download = `${songs[index].songName} - ${songs[index].artist}.mp3`;
          
    })
})


let current_start = document.getElementById('current_start');
let current_end = document.getElementById('current_end');

let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');


music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    current_end.innerText = `${Math.floor(music_dur/60)}:${Math.floor(music_dur%60)}`;
    current_start.innerText = `${`0${min1}`}:${sec1}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    bar2.style.width = `${(seek.value)}%`;
    dot.style.left = `${seek.value}%`;

})

seek.addEventListener('change', ()=>{
    music.currentTime = (seek.value * music.duration)/100;
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('volumes');
let vol_bar = document.getElementById('vol_bar');
let vol_dot = document.getElementById('vol_dot'); 

vol.addEventListener('change' , ()=>{
    music.volume = vol.value/100;
    vol_bar.style.width = `${vol.value}%`;
    vol_dot.style.left = `${vol.value}%`;
     
})

vol_icon.addEventListener('click', ()=>{
    if(music.muted == true){
        music.muted = false;
        vol_icon.innerHTML = '<path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" /><path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />'
    }else{
        music.muted = true;
        vol_icon.innerHTML = `<path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />`
    }
})

let back = document.getElementById('previous');
let next = document.getElementById('nextone');

back.addEventListener('click', ()=>{
    index--;
    if(index < 1){
        index = 20;
    }
    music.src = `assets/audio/arijit/${index}.mp3`;

            console.log(index);
            
            music.play();
            document.getElementById('poster_master_play').src = `assets/img/arijit/${index}.jpg`;
            document.getElementById('master_name_playing').innerText = songs[index].songName;
            document.getElementsByClassName('text-[10px] text-[#4c5262] master')[0].innerText = songs[index].artist;
            wave.classList.add('active1');
            masterPlay.innerHTML = '<path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />'
            makeAllBg();
            Array.from(document.querySelectorAll('#song_item'))[index-1].style.backgroundColor = '#6969691a';
            makeAllPlay();
            document.getElementById(`${index}`).innerHTML = '<path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />'
            document.getElementById('downn').href = `assets/audio/arijit/${index}.mp3`;
            document.getElementById('downn').download = `${songs[index].songName} - ${songs[index].artist}.mp3`;
          
     
})

next.addEventListener('click', ()=>{
    index++;
    if(index >20){
        index = 1;
    }
    music.src = `assets/audio/arijit/${index}.mp3`;

            console.log(index);
            
            music.play();
            document.getElementById('poster_master_play').src = `assets/img/arijit/${index}.jpg`;
            document.getElementById('master_name_playing').innerText = songs[index].songName;
            document.getElementsByClassName('text-[10px] text-[#4c5262] master')[0].innerText = songs[index].artist;
            wave.classList.add('active1');
            masterPlay.innerHTML = '<path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />'
            makeAllBg();
            Array.from(document.querySelectorAll('#song_item'))[index-1].style.backgroundColor = '#6969691a';
            makeAllPlay();
            document.getElementById(`${index}`).innerHTML = '<path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />'
            document.getElementById('downn').href = `assets/audio/arijit/${index}.mp3`;
            document.getElementById('downn').download = `${songs[index].songName} - ${songs[index].artist}.mp3`;
          
     
})


// let shuffle = document.getElementById('shuffle');

// shuffle.addEventListener(('click') , ()=>{
//     let a = Math.floor((Math.random() * 20) + 1);
//     index = a;
// })



 



















let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementById('pop_song');

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft +=100;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=100;
})
