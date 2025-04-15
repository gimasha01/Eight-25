// Smooth scroll to top on button click
document.querySelectorAll('.btn, .button').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  