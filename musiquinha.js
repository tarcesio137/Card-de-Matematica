let musica;

function preload(){
  musica = loadSound("levi.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}