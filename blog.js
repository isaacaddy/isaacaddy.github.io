// Add active class to current nav link
const currentLocation = location.href;
const navLinks = document.querySelectorAll('nav a');
const navLength = navLinks.length;

for (let i = 0; i < navLength; i++) {
  if (navLinks[i].href === currentLocation) {
    navLinks[i].classList.add('active');
  }
}