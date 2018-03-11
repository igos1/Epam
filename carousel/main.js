var slides=document.getElementsByClassName("slide");
var  slideInd=Math.round(Math.random()*(slides.length));
showslides(slideInd);
function changePict(n){  
    slideInd=n;    
    showslides(slideInd);
}

function forwback(n){
    slideInd+=n; 
    showslides(slideInd);     
}
 
function showslides(n){    

    var slidesImg = document.getElementsByClassName("imag");  
    var mainImg = document.getElementById("Picture");
    var start = Date.now();
    var animation = setInterval(function(){
        var Time=Date.now()-start;
        if(Time>=700){
            clearInterval(animation);
            return;
        }
        mainImg.style.opacity=Time/700;     
    },10);

    if (n > slides.length){ slideInd=1;}    
    if (n < 1){ slideInd=slides.length;}

       for(var i=0;i<slides.length;i++){
       slidesImg[i].style.display="block";           
       } 

      for(var i=0;i<slides.length;i++){
       if((i!=slideInd) && (i!=slideInd-1) && (i!=slideInd-2 )) 
       {
           slidesImg[i].style.display="none";             
       }

       if(slideInd==slides.length)
       {
        slidesImg[slides.length-3].style.display="block"; 
       }

       if(slideInd==1)
       {
        slidesImg[2].style.display="block"; 
       }
      } 
    
    for(var i=0;i<slides.length;i++){
        slides[i].style.opacity=1;    }    
    slides[slideInd-1].style.opacity=0.3; 
    mainImg.src=slidesImg[slideInd-1].src;  
    
}

