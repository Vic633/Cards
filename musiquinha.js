let musica;

function preload(){
  musica = loadSound("GOO.MP3")
}

function setup(){
  musica.play();
  musica.loop();
}