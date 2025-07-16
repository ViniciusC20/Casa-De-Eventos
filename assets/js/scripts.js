let slideIndex = 0;
const slides = document.querySelectorAll('.carrossel-img');
const prevBtn = document.querySelector('.carrossel-btn.prev');
const nextBtn = document.querySelector('.carrossel-btn.next');

function showSlide(n) {
  slides.forEach((img, i) => {
    img.classList.toggle('ativo', i === n);
  });
}
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// realizar troca automática a cada 4 segundos
setInterval(nextSlide, 4000);

showSlide(slideIndex);
document.querySelectorAll('.info-bloco').forEach(bloco => {
  bloco.style.opacity = 0;
  bloco.style.transform = 'translateY(40px)';
});

function animarBlocos() {
  document.querySelectorAll('.info-bloco').forEach(bloco => {
    const rect = bloco.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bloco.style.transition = 'opacity 1s, transform 1s';
      bloco.style.opacity = 1;
      bloco.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', animarBlocos);
window.addEventListener('load', animarBlocos);

function typeWriter(element, text, speed = 60) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
window.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('typed-title');
  if (el) typeWriter(el, 'Realize o seu sonho com elegância');
});




document.querySelector('.btn-agendar').onclick = function() {
  const data = document.getElementById('data-evento').value;
  const msg = document.getElementById('mensagem-agenda');
  if (data) {
    msg.textContent = "Solicitação de agendamento enviada para " + data.split('-').reverse().join('/');
    msg.style.color = "#25d366";
  } else {
    msg.textContent = "Por favor, selecione uma data para agendar.";
    msg.style.color = "#ff5050";
  }
};

document.querySelector('.btn-disponibilidade').onclick = function() {
  const data = document.getElementById('data-evento').value;
  const msg = document.getElementById('mensagem-agenda');
  if (data) {
    msg.textContent = "Verificando disponibilidade para " + data.split('-').reverse().join('/') + "...";
    msg.style.color = "#fff";
  } else {
    msg.textContent = "Selecione uma data para ver as disponibilidades.";
    msg.style.color = "#ff5050";
  }
};