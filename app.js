let nav = document.querySelector('#nav');

window.addEventListener('scroll', function(){
    let test = document.documentElement.scrollTop;
      if(test > 200){
        nav.classList.add('active');
      }else{
        nav.classList.remove('active');
      }
});

//Dark and Light Mood

let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');
let body = document.querySelector('body');

moon.addEventListener("click",function(){
    body.classList.add('mode');
    if(body.classList.contains('mode')){
      moon.style.marginTop = "-100%";
    }
});

sun.addEventListener("click",function(){
    body.classList.remove("mode");
    if(!body.classList.contains("mode")){
      moon.style.marginTop = "0%";
    }
});

//Mouse carsore create
let mouse = document.querySelector("#mouse");
// let point = document.querySelector('.point');

window.addEventListener("mousemove", function(event){

  let top = event.pageY;
  let left = event.pageX;

  mouse.style.top = top + 'px';
  mouse.style.left = left + 'px';

});