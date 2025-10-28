// js/main.js
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const target=document.querySelector(a.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // simple accessible toggle for navbar - Bootstrap handles most behavior
  // contact form validation
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        e.preventDefault();
        e.stopPropagation();
        form.classList.add('was-validated');
      }
    });
  }
});
