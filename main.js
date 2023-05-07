const primary_nav = document.querySelector('.primary_navigation');
const nav_toggle =  document.querySelector('.nav_toggle');
const lightbox = document.querySelector('.lightbox');
const minus_quantity = document.querySelector('.product_quantity_minus');
const add_quantity = document.querySelector('.product_quantity_plus');
const product_quantity = document.querySelector('#product_quantity');

console.log(product_quantity.value);

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

// Remove 1 to quantity
minus_quantity.addEventListener('click',()=>{
   if( product_quantity.value != 1){
      product_quantity.value = parseInt(product_quantity.value) -1 ;
   }
})
// Add  1 to quantity
add_quantity.addEventListener('click',()=>{

      product_quantity.value = parseInt(product_quantity.value) +1;
   
})



