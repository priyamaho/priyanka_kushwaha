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

//----------------Contact email send with input field----------
/*function sendEmail(){
let fullName = document.querySelector('input[name="full_name"]').value;
let email_id = document.querySelector('input[name="email"]').value;
let mobileNumber = document.querySelector('input[name="mobile_num"]').value;
let subject = document.querySelector('input[name="subject"]').value;
let message = document.querySelector('textarea [name="message"]').value;

Email.send({ 
    Host: "priyankakushwaha0702.gmail.com", 
    From: email_id, 
    Subject: subject, 
    Body: `Welcome ${fullName} phone number ${mobileNumber} ${message}`,  // send entered values from input box
  }).then(function (message) { 
    alert("Mail has been sent successfully") 
  }); 


};*/

