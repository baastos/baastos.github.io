const Init = () => {  
    const buttonMenu = document.querySelector('.header__btn');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__links li');
    const scrollAbout = document.getElementById('aboutLink');
    const scrollCertificate = document.getElementById('certificadoIdLink');
    const scrollContact = document.getElementById('contactIdLink');
    const scrollAboutView = document.getElementById('about');
    const scrollCertificateView = document.getElementById('certificadoId');
    const scrollContactView = document.getElementById('contactId');
    const modal = document.querySelectorAll('.myModal');
    const certificate= document.querySelectorAll('.myImg');
    const captionText = document.querySelectorAll('.caption');
    const modalImg= document.querySelectorAll('.modal-content')
    const closeImgButton= document.querySelector('.closeImg')
    //Modal Image certificate
    
    certificate.forEach(function(item){
        item.addEventListener('click',function(){
        console.log(modal[0]);
        modal[0].style.display="block";
        modalImg[0].src = item.src;
        captionText[0].innerHTML=item.alt;
        });    
    });
    closeImgButton.addEventListener("click",function(){
        modal[0].style.display="none";
    });
     //toggle Nav Open and close  AND Active Links with animation
    buttonMenu.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        animationLinks();
    });
  
        //LINKS OPACITY CHANGE WHEN CLICKED THEN SCROLL TO ELEMENT
    navLinks.forEach(function(item) {
        item.addEventListener('click',function(e){    
            e.preventDefault();    
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'start' });
            removeClass();
            if(item.className){
                return false;
            } else{
                item.classList.add('nav-links-active');
                    
            }
            
      });
    });
    
    //CLOSE MENU WHEN CLICK IN LINKS - MOBILE
    navLinks.forEach(function(item) {
        item.addEventListener('click',function(){
        nav.classList.toggle('nav-active');
        animationLinks();
        })
    })
        //LINKS OPACITY CHANGE WHEN SCROLLING THE PAGE
     window.addEventListener('scroll',function(){          
             
               
            if (window.offsetTop < scrollAboutView.offsetTop){
                    removeClass();
                 } 
            if (window.offsetTop > scrollAboutView.offsetTop){
                    removeClass();
                    scrollAbout.classList.add('nav-links-active');
                 } 
            if (window.offsetTop > scrollCertificateView.offsetTop){
                    removeClass();
                    scrollCertificate.classList.add('nav-links-active');
                 } 
            if (window.offsetTop > scrollContactView) {
                    removeClass();
                    scrollContact.classList.add('nav-links-active');
                 }
        });
        
       //FUNCTIONS 
   function animationLinks(){
     navLinks.forEach((link,index) => {
        if (link.style.animation) {
            link.style.animation = '';
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
    });   
   }
   function removeClass(){
            for(let i = 0; i < navLinks.length; i++){
                navLinks[i].className = '';
            }
        }
   
}
Init();
