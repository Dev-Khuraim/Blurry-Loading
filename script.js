let loading_text = document.getElementById('loading-text');
let bg = document.querySelector('main');
let count = 0;
let blur = 50;

let tm = setInterval(blurIt,40);
function blurIt(){
   
    if(count==99){
        clearInterval(tm);
    }
count++;
blur = blur-0.5;
loading_text.style.opacity = count/100;
loading_text.innerText = `${count}%`;
bg.style.filter = `blur(${blur}px)`

}