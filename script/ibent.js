//イベント画面の画像をすべて取得
const ibentItem = document.querySelectorAll(".ibent-item");
//監視対象に入ったら、表示する関数
const ibentObserve = (entries, obs) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.animate(
          {
            opacity: [0, 1],
          },
          {
            duration: 2000,
            easing: "ease",
            fill: "forwards",
          }
        );
        obs.unobserve(entry.target);
      }
    }
  });
};

const ibentObserver = new IntersectionObserver(ibentObserve);
ibentItem.forEach((item) => {
  ibentObserver.observe(item);
});
