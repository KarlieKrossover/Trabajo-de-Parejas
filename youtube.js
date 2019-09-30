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
          playerVars: {'autoplay': 0},
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      function onPlayerStateChange() {}

      var isPlaying = false;
      window.addEventListener('scroll', function(){
        var video = document.getElementById("video");
        var posVideo = video.offsetTop;
        var alturaVideo = video.offsetHeight;
        var currentScroll = window.pageYOffset;
        var windowHeight = window.innerHeight;
     
        if(posVideo + alturaVideo < currentScroll + windowHeight && posVideo > currentScroll){
            if(!isPlaying){
                player.playVideo();
                isPlaying = true;
            }
           }else{
               if(isPlaying){
                player.pauseVideo();
                isPlaying = false;
               }
            
           }
        }
    
