const img1= document.querySelector("#img1");
const img2=document.querySelector("#img2");
const but=document.querySelector("button");

but.addEventListener("click", function(){
    let imgsource1= img1.src;
    let imgsourc2= img2.src;
    img2.src=imgsource1;
    img1.src=imgsourc2;
});