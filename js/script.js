let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let nav = document.querySelector('.nav');
let main = document.querySelector('.main');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    nav.classList.toggle('active');
    main.classList.toggle('active');
}
function toggleMenu(){
   
    document.getElementById("nav").classList.remove("active");
    document.getElementById("main").classList.remove("active");
   
    // nav.classList.remove('active');
    // main.classList.remove('active');
}


