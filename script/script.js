// ローディングからの画面遷移
const loadingLeft = document.querySelector('#loading-left');
const loadingRight = document.querySelector('#loading-right');
const keyframes = {
  transform: ['scaleX(1)', 'scaleX(0)']
};

const options = {
  duration: 1000,
  easing: 'ease',
  fill: 'forwards'
};

window.addEventListener('load', () => {
  loadingLeft.animate(keyframes, options);
  loadingRight.animate(keyframes, options);
})