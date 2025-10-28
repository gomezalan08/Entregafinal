// js/app.js
document.addEventListener('DOMContentLoaded', () => {
  // Newsletter header/footer
  const newsletter = document.getElementById('newsletter-form');
  if (newsletter) {
    newsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletter.querySelector('input[type="email"]').value || '';
      if (!email.includes('@')) { alert('Ingresá un email válido'); return; }
      newsletter.querySelector('button[type="submit"]').textContent = '¡Gracias!';
      setTimeout(() => { newsletter.querySelector('button[type="submit"]').textContent = 'Suscribirme'; newsletter.reset(); }, 1500);
    });
  }

  const footerNewsletter = document.getElementById('footer-newsletter');
  if (footerNewsletter) {
    footerNewsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = footerNewsletter.querySelector('input[type="email"]').value || '';
      if (!email.includes('@')) { alert('Ingresá un email válido'); return; }
      footerNewsletter.querySelector('button[type="submit"]').textContent = '¡Gracias!';
      setTimeout(() => { footerNewsletter.querySelector('button[type="submit"]').textContent = 'Suscribirme'; footerNewsletter.reset(); }, 1500);
    });
  }

  // Contact form simple validation (used in contacto.html)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      if (!contactForm.checkValidity()) {
        e.preventDefault(); e.stopPropagation();
      } else {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        btn.textContent = 'Enviando...';
        setTimeout(() => { btn.textContent = 'Enviar'; alert('Mensaje enviado. ¡Gracias!'); contactForm.reset(); }, 900);
      }
      contactForm.classList.add('was-validated');
    });
  }

  // Review form
  const reviewForm = document.getElementById('review-form');
  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Gracias por tu reseña. Publicada (simulado).');
      reviewForm.reset();
    });
  }

  // AOS fallback: if AOS not loaded, use IntersectionObserver
  if (!window.AOS) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-aos]').forEach(el => io.observe(el));
  }
});
