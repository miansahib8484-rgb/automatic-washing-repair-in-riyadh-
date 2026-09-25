document.addEventListener('DOMContentLoaded', function () {
  if (window.AOS) {
    AOS.init({ duration: 650, once: true, offset: 60, easing: 'ease-out-cubic' });
  }

  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.querySelector('#form-note');
      if (note) {
        note.textContent = 'Thank you — your request has been received. We will contact you shortly. / شكراً لتواصلكم، سنقوم بالتواصل معكم قريباً.';
        note.classList.remove('d-none');
      }
      form.reset();
    });
  }
});
