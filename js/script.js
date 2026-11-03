// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Typewriter
const roles = ['Java & Spring Boot Developer', 'React JS Frontend Engineer', 'Full Stack Developer', 'ML Enthusiast'];
let rIdx = 0, cIdx = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type() {
  const cur = roles[rIdx];
  const disp = deleting ? cur.slice(0, cIdx--) : cur.slice(0, cIdx++);
  tw.innerHTML = disp + '<span class="cursor"></span>';
  if (!deleting && cIdx > cur.length) { deleting = true; setTimeout(type, 1800); return; }
  if (deleting && cIdx < 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; cIdx = 0; setTimeout(type, 300); return; }
  setTimeout(type, deleting ? 40 : 75);
}
setTimeout(type, 800);

// Nav active highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
  navLinks.forEach(a => { a.style.color = a.getAttribute('href') === `#${cur}` ? 'var(--neon)' : ''; });
});

// Form submit
function handleSubmit(btn) {
  btn.textContent = 'Sending…'; btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Sent ✓';
    btn.style.background = '#0d2d20'; btn.style.color = 'var(--neon)';
  }, 1200);
}
