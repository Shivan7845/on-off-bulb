// let heading = document.querySelector("h1");
// let para = document.querySelector("p");
// let change_btn = document.querySelector(".change_btn");
// let change_btn1 = document.querySelector(".change_btn1");


// change_btn.addEventListener("click",function(){
//     heading.innerHTML = "Sab thik bhai"
// });
// change_btn1.addEventListener("click",function(){
//     para.innerHTML = "hello"
// });

//================================================================
let onbtn = document.querySelector(".btn_on");
let offbtn = document.querySelector(".btn_off");
let image = document.querySelector("img");

offbtn.style.display = "none";

onbtn.addEventListener("click",function(){
    image.src = "bulb_on.jpg";
    offbtn.style.display = "initial";
    onbtn.style.display = "none";

});

offbtn.addEventListener("click",function(){
    image.src = "bulb_off.jpg";
    onbtn.style.display = "initial";
    offbtn.style.display = "none";

});
