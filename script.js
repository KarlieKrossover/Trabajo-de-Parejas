//hay una función para conocer cuantos pixeles se ha scrolleado. Siempre se inicia desde el pixel 0.
//necesitamos 2 datos: que tan lejos está el video de algo
//window = la ventana del navegador. Variable global
//eventListener: quiero que hagas algo cuando pase otra cosa
//target: un elemento que hemos creado
//offsettop= los pixeles que hay desde el principio del documento hasta algo
//offsetparent = el padre del video
//offset = desfazado

window.addEventListener('scroll', function(){
    var video = document.getElementById("rectangulo");
    var posVideo = video.offsetTop;
    var currentScroll = window.pageYOffset;
    
    console.log("posVideo", posVideo);
});