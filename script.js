
 // Mobile menu toggle
 document.getElementById("hamburger").addEventListener("click", function () {
    const nav = document.getElementById("navigationMenu");
    nav.classList.toggle("hidden");
  });

  //the counts
  const counters = document.querySelectorAll('.counter');

  
  function animateCount(counter) {
    const target = +counter.getAttribute('data-target');
    const increment = Math.ceil(target / 100);
    let current = 0;

    function updateCount() {
      if (current < target) {
        current += increment;
        counter.innerText = current > target ? target : current;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    }

    updateCount();
  }

  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        animateCount(counter);
        observer.unobserve(counter); 
      }
    });
  }, {
    threshold: 0.5 
  });

  
  counters.forEach(counter => {
    observer.observe(counter);
  });

  //for active nav
  document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const linkhref = link.getAttribute('href').split("/").pop();
      if (linkhref === currentPage) {
        link.classList.add(
          'text-linen',
          'font-bold',
          'border-b-2',
          'border-red',
        
        );
      }
    });
  });