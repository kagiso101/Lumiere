document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('main-nav');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  
    // Optional: Animate in cards and articles
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.2 });
  
    document.querySelectorAll('.card, article').forEach(el => observer.observe(el));
  });
  