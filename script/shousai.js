// const point = document.querySelector('.shousai-point');

//監視対象が範囲内に入ったときにする動作(スライド)
// const showPoint = (entries) => {
//   entries[0].target.animate(
//     {
//       opacity:[0,1],
//       translate:['0 30px',0],
//     },
//     {
//       duration:2000,
//       easing:'ease'
//     }
//   )
// };
// const pointObserver = new IntersectionObserver(showPoint);
// pointObserver.observe(point);

//監視対象が範囲内に入ったときにする動作(下線を引く)
const article = document.querySelector('.shousai-point-article');
console.log(article);

const underLine = (entries) =>{
  if (entries[0].isIntersecting){
    entries[0].target.classList.add('on');
  }
}

const articleObserver = new IntersectionObserver(underLine);
articleObserver.observe(article);

