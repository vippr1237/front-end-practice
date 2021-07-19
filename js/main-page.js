const slide= document.querySelector(".slide-images");
const slideImg=document.querySelectorAll(".slide-images img");

//button
const prevBtn=document.querySelector("#prevBtn");
const nextBtn=document.querySelector("#nextBtn");

//counter
let slideIndex=1;
const size=slideImg[0].clientWidth;
const dots=document.querySelectorAll(".slide-container ul li");
dots[slideIndex-1].className+=" active"
slide.style.transform= "translateX(" + (-size*slideIndex) +"px)"; 
nextBtn.addEventListener("click",function(){
	if (slideIndex >=slideImg.length-1){
		return;
	}
	plusSlide(1);
});
prevBtn.addEventListener("click",function(){
	if (slideIndex <=0){ 
	return;
	}
	plusSlide(-1);
});

slide.addEventListener("transitionend",function(){
	if (slideImg[slideIndex].id==="lastClone"){
		slide.style.transition="none";
		slideIndex=slideImg.length-2;
		slide.style.transform= "translateX(" + (-size*slideIndex) +"px)"; 
	}
});
slide.addEventListener("transitionend",function(){
	if (slideImg[slideIndex].id==="firstClone"){
		slide.style.transition="none";
		slideIndex=slideImg.length-slideIndex;
		slide.style.transform= "translateX(" + (-size*slideIndex) +"px)";	
	}
});
setInterval(function(){
	plusSlide(1);
},5000);
function showSlide(n){
	
	slide.style.transition="transform 0.4s ease-in-out";
	slide.style.transform= "translateX(" + (-size*slideIndex) +"px)";
	for (let i=0;i<dots.length;i++){
		dots[i].className= dots[i].className.replace(" active","");
	}
	if (slideIndex<1)
		dots[dots.length-1].className+=" active";
	else if (slideIndex>dots.length)
		dots[0].className+=" active";
	else
	 dots[slideIndex-1].className+=" active";
}
function plusSlide(n){
	
	showSlide(slideIndex+=n);
}
function currentSlide(n){
	showSlide(slideIndex=n);
}
function stopTimeout(){
	clearTimeout(t)
}

