var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('video', {
          height: '360',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
 function onPlayerReady(event) {
        //event.target.playVideo();
      }
function onPlayerStateChange(){
   
}

//hay una función para conocer cuantos pixeles se ha scrolleado. Siempre se inicia desde el pixel 0.
//necesitamos 2 datos: que tan lejos está el video de algo
//window = la ventana del navegador. Variable global
//eventListener: quiero que hagas algo cuando pase otra cosa
//target: un elemento que hemos creado
//offsettop= los pixeles que hay desde el principio del documento hasta algo
//offsetparent = el padre del video
//offset = desfazado

var isPlaying = false;
window.addEventListener('scroll', function(){
    var video = document.getElementById("video");
    var posVideo = video.offsetTop;
    var alturaVideo = video.offsetHeight;
    var currentScroll = window.pageYOffset;
    var windowHeight = window.innerHeight;
   
    if(posVideo + alturaVideo < currentScroll + windowHeight && posVideo > currentScroll){
        if(!isPlaying){
            player.playvideo();
            isPlaying = true;
        }
       }else{
           if(isPlaying){
               player.pauseVideo;
               isPlaying = false;
           }

       }
   
    //console.log("posVideo", posVideo);
    //console.log("currentScroll", currentScroll);
    //console.log("windowHeight", windowHeight);
   
    //create element: crea un elemento con el tag que querem
});