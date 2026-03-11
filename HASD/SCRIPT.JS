let slides=document.querySelectorAll(".slide");
let index=0;

function showSlide(i){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[i].classList.add("active");

}

/* NEXT */

function nextSlide(){

index++;

if(index>=slides.length){
index=0;
}

showSlide(index);

}

/* PREVIOUS */

function prevSlide(){

index--;

if(index<0){
index=slides.length-1;
}

showSlide(index);

}

/* AUTO SLIDE */

let auto=setInterval(nextSlide,3000);

/* STOP  HOVER */

let slider=document.getElementById("slider");

slider.addEventListener("mouseenter",()=>{
clearInterval(auto);
});

slider.addEventListener("mouseleave",()=>{
auto=setInterval(nextSlide,3000);
});

/* STOP  VIDEO PLAY   */

slides.forEach(slide=>{

if(slide.tagName==="VIDEO"){

slide.addEventListener("play",()=>{
clearInterval(auto);
});

slide.addEventListener("pause",()=>{
auto=setInterval(nextSlide,3000);
});

}

});

/* ERROR DETECTION */

slides.forEach(media=>{

media.onerror=function(){

let bar=document.getElementById("errorBar");

bar.style.display="block";

setTimeout(()=>{
bar.style.display="none";
},4000);

};

});
