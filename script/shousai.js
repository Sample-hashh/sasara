const point = document.querySelector('.shousai-point');

//監視対象が範囲内に入ったときにする動作
const showPoint = (entries) => {
  console.log(entries[0])
  entries[0].target.animate(
    {
      opacity:[0,1],
      rotate:['x 360deg',0],
    },
    {
      duration:2000,
      easing:'ease'
    }
  )
};

//監視ロボットの設定
const pointObserver = new IntersectionObserver(showPoint);
pointObserver.observe(point);

