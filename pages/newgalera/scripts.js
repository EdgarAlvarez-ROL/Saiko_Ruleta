const images = document.querySelectorAll('.image-container img');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = image.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
