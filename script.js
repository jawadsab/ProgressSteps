const progressLine = document.getElementById('progress');

const circles = document.querySelectorAll('.circle');

const nextBtn = document.getElementById('next');

const prevBtn = document.getElementById('prev');

let step = 1;

nextBtn.addEventListener('click', (e) => {
  step++;

  if (step > circles.length) {
    step = circles.length;
  }

  update();
});

prevBtn.addEventListener('click', (e) => {
  step--;

  if (step < 0) {
    step = 1;
  }

  update();
});

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < step) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (step === 1) {
    prevBtn.disabled = true;
  } else if (step === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};
