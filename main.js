var primary_nav = document.querySelector('.primary_navigation');
var nav_toggle =  document.querySelector('.nav_toggle');
var lightbox = document.querySelector('.lightbox');



nav_toggle.addEventListener('click', ()=>{

   var isvisible = JSON.parse(primary_nav.getAttribute('data-visible'));
   if( isvisible== false){
    primary_nav.setAttribute('data-visible', true)
    nav_toggle.setAttribute('aria-expanded', true);
    lightbox.setAttribute('data-visible', true);
   }
   else{
    primary_nav.setAttribute('data-visible', false)
    nav_toggle.setAttribute('aria-expanded', false);
    lightbox.setAttribute('data-visible', false);
   }
    
});


