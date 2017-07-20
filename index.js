var songs = [
  {
    title: 'Moonlight Sonata',
    artist: 'Beethoven',
    src: "audio/beethoven.mp3",
  },
  {
    title: 'Lacrimosa',
    artist: 'Mozart',
    src: "audio/mozart.mp3",
  },
  {
    title: 'Nocturne Op.9 No.2',
    artist: 'Chopin',
    src: "audio/chopin.mp3",
  }
]

var audio = document.querySelector('audio')
var artist = document.getElementById('artist')
var title = document.getElementById('title')


class Jukebox {
  constructor (index){
    this.song = songs[index].src 
    this.artist = songs[index].artist
    this.title = songs[index].title
  }
  
  addSong(){
    artist.innerHTML = this.artist
    title.innerHTML = this.title
    audio.src = this.song  
  }
  
  static playSong() {
    
    audio.play()
  }
  
  static pauseSong() {
    audio.pause()
  }
  
  static stopSong() {
    audio.pause();
    audio.currentTime = 0;
  }
}

var info = document.getElementById('info')
var controls = document.getElementById('controls')

function pushButton(index){
  var jukebox = new Jukebox (index)
  jukebox.addSong()
  info.classList.remove('hidden')
  controls.classList.remove('hidden')
 
}
