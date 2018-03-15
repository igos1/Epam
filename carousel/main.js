
var slides = document.getElementsByClassName("slide");

var  slideInd = Math.round(Math.random()*(slides.length));

let mainImg = document.createElement("div");
let Picture = document.createElement("img");
mainImg.appendChild(Picture);

mainImg.className = "mainPict";
Picture.className = "Picture";

document.body.insertBefore(mainImg, document.body.firstChild);

let prev = document.createElement("img");
let next = document.createElement("img");

prev.className = "prev";
next.className = "next";
prev.src = "image/prev.png";
next.src = "image/next.png";
document.body.appendChild(prev);
document.body.appendChild(next);

showslides(slideInd);

prev.addEventListener('click',back);
next.addEventListener('click',forw);

for(var i = 0 ; i < slides.length ; ++i ){
    slides[i].addEventListener('click',changePict);
}


function find(array, value) {
    if (array.indexOf) { 
        return array.indexOf(value);
      }
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) return i+1;
    }  
    return -1;
  }

function changePict(){  
    
    slideInd=find(slides,this);    
    showslides(slideInd);
}



function forw(){
    slideInd += 1; 
    showslides(slideInd);     
}

function back(){
    slideInd += -1; 
    showslides(slideInd);     
}
 
function animate(draw, duration) {
    var start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      
      var timePassed = time - start;  
      
      if (timePassed > duration) timePassed = duration;  
     
      draw(timePassed);  
      
      if (timePassed < duration) {
        requestAnimationFrame(animate);
      }
  
    });
  }

function showslides(n){    

    var slidesImg = document.getElementsByClassName("imag");     
    

    animate(function(timePassed) {
        mainImg.style.opacity = timePassed / 500 ;
      }, 1000);

    if (n > slides.length){ slideInd = 1;}    
    if (n < 1){ slideInd = slides.length;}

       for (var i = 0 ; i < slides.length ; i ++){
       slidesImg[i].style.display = "block";           
       } 

      for (var i  = 0; i < slides.length ; i ++){
       if((i != slideInd) && (i != slideInd - 1) && (i != slideInd - 2 )) 
       {
           slidesImg[i].style.display = "none";             
       }
       slides[i].style.opacity = 1;
    
         
    }
                                      
       if(slideInd == slides.length)
       {
        slidesImg[slides.length - 3].style.display = "block"; 
       }

       if(slideInd == 1)
       {
        slidesImg[2].style.display = "block"; 
       }
         
      
    slides[slideInd - 1].style.opacity = 0.3; 
    Picture.src = slidesImg[slideInd - 1].src;  
    
    
}


