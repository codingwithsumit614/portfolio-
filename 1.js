// Simple 3D effect when moving the mouse over the content
const content = document.querySelector('.content');
content.addEventListener('mousemove', (event) => {
  let mouseX = event.clientX / window.innerWidth - 0.5;
  let mouseY = event.clientY / window.innerHeight - 0.5;
  
  content.style.transform = `rotateX(${mouseY * 10}deg) rotateY(${mouseX * 10}deg)`;
});

content.addEventListener('mouseleave', () => {
  content.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

