scaleElement = (element,scaleMultiplier)=>{
    element.style.transform = `scale(${scaleMultiplier})`;
}
translateElementY = (element, distance) =>{
    element.style.transform = `translateY(${distance}px)`;
}
translateElementXPercent = (element, distance) =>{
    element.style.transform = `translateX(${distance})`;
}
window.addEventListener('load', function() {
    document.querySelector(".container").style.display = "initial";
}, false);
 
window.addEventListener('scroll',function(){
    var scrollY = window.scrollY;
    if(scrollY<=(2*window.innerHeight)){
        mainFront.style.opacity = 1;
        mainBack.style.opacity = 1;
        mainContent2.style.color = "white";
        scaleElement(mainBack,1+scrollY/10000);
        scaleElement(mainFront,1+scrollY/1500);
        translateElementY(main,scrollY);
    }else if(window.scrollY<=3*window.innerHeight){
        translateElementY(main,scrollY);
        mainFront.style.opacity = 0;
        mainBack.style.opacity = 0;
        mainContent2.style.color = "black";
        mainContent2.style.opacity = 1;
    }
    if(window.scrollY>=window.innerHeight*0.5){
        mainHeadingOne.style.opacity = 0;
        mainHeadingTwo.style.opacity = 0;
        mainContent2.style.opacity = 1;
    }else{
        mainHeadingOne.style.opacity = 1;
        mainHeadingTwo.style.opacity = 1;
        mainContent2.style.opacity = 0;
    }
    //royalMint Font Movement
    let royalMintFontTop = royalMintFont.getBoundingClientRect().top;
    if(royalMintFontTop<window.innerHeight*1)
        translateElementY(royalMintFont,-((scrollY-(window.innerHeight*3.7))*1))
    //gunfight
    if(gun.getBoundingClientRect().top<=(window.innerHeight*0.7)){
        gun.style.opacity = 1;
        translateElementXPercent(gun,"50%");
    }else{
        gun.style.opacity = 0;
        translateElementXPercent(gun,"-50%");
    }
    if(explosion.getBoundingClientRect().top<=(window.innerHeight*0.4)){
        explosion.style.opacity = 1;
        bullet.style.opacity = 1;
        translateElementXPercent(bullet,"50%");
    }else{
        explosion.style.opacity = 0;
        bullet.style.opacity = 0;
        translateElementXPercent(bullet,"0");
    }
});


var mainFront = document.querySelector(".main .front");
var mainBack = document.querySelector(".main .back");
var main = document.querySelector(".main .bg");
var main = document.querySelector(".main");
var mainHeadingOne = document.querySelector(".main .contentWrapper1 .h1");
var mainHeadingTwo = document.querySelector(".main .contentWrapper1 .h2");
var mainContent2 = document.querySelector(".main .contentWrapper2");
var royalMintFont = document.querySelector(".royalMint .font");
var gun = document.querySelector(".gunFight .wrapper .gun");
var explosion = document.querySelector(".gunFight .wrapper .explosion");
var bullet = document.querySelector(".gunFight .wrapper .bullet");
