//女沼のささらとは_歴史_画像
const shishi1 = document.querySelector('.shishi1');
console.log(shishi1);
const slideImg = (entries) =>{
  console.log(entries[0].target);
  entries[0].target.animate(
    {
      translate:['50vh 0','0 0'],
    },
    {
      duration:2000,
      easing:'ease',
      fill:'forwards'
    }
  )

}
const imgObserver = new IntersectionObserver(slideImg);
imgObserver.observe(shishi1);
