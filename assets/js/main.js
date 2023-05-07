function audioPlay() {
    var audio = document.getElementById("audio");
    audio.volume = 1;
    audio.play()
  }
  
  function videoPlay() {
    var video = document.getElementById("video");
    video.play()
  }
  
  var Sounds = new Array();
    Sounds[0]="assets/audios/jasiah.mp3";
    Sounds[1]="assets/audios/break.mp3";
    Sounds[2]="assets/audios/Hey.mp3";
    /*Sounds[7]="assets/audio/audio_8.mp3";*/
  function RandomSound() {
      var randomNum = Math.floor(Math.random()*Sounds.length);
      document.getElementById("audio").src=Sounds[randomNum];
  }
  RandomSound();
