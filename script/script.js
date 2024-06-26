// ローディングからの画面遷移
const loading = document.querySelector('#loading');
console.log(loading);
window.addEventListener('load',() =>{
  loading.animate(
    {
      opacity:[1,0],
      visibility:'hidden'
    },
    {
      duration:2000,
      easing:'ease',
      fill:'forwards'
    }
    
  );
});