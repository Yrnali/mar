const heartBtn = document.getElementById('heartBtn');
const sound = document.getElementById('sound');
const message = document.getElementById('birthday-message');

heartBtn.addEventListener('click', () => {
  sound.play();
  heartBtn.style.animation = 'none';

  const totalHearts = 150;

  for (let i = 0; i < totalHearts; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-sm';

    const size = Math.floor(Math.random() * 15) + 10; // от 10 до 25px
    heart.style.width = `${size}px`;
    heart.style.height = `${size * 0.9}px`;

    const color = ['#ff5e99', '#ff85b3', '#ffbde0', '#fff0f6'][Math.floor(Math.random() * 4)];
    heart.style.backgroundColor = color;
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `-${Math.random() * 100}px`;
    heart.style.opacity = Math.random() * 0.8 + 0.2;

    const duration = Math.random() * 2 + 3; // 3–5 сек
    heart.style.animationDuration = `${duration}s`;

    const rotation = Math.random() * 90 - 45; // от -45 до +45 градусов
    heart.style.transform = `rotate(-45deg) rotate(${rotation}deg)`;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), duration * 1000);
  }

  // Через 5 секунд показать поздравление
  setTimeout(() => {
    document.body.innerHTML = '';
    message.classList.add('show');
    message.classList.remove('hidden');
    document.body.appendChild(message);
  }, 5000);
});
