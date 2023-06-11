//==================toggle icon navbar==========//
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};

//======================scroll selections active link==========//

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        console.log(id);
        if(top >= offset && top < offset + height){
             navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
             });
        };
    });
    //----------------------stiky navbar---------------
        let header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY>100);

//---------Remove toggle icon and navbar when click navbar link or scroll--------------//

menuIcon.classList.remove('bx-x');
navBar.classList.remove('active');
};

