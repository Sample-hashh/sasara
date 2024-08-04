//女沼のささらとは_歴史_画像

const imageItems = document.querySelectorAll(".image-item");
// 左からスライドする関数
const slideLeft = (entries) => {
  entries.forEach((entry) => {
    entry.target.animate(
      {
        translate: ["20vw 0", "0 0"],
        opacity: [0, 1],
      },
      {
        duration: 2000,
        easing: "ease",
        fill: "forwards",
      }
    );
  });
};
// 右からスライドする関数
const slideRight = (entries) => {
  entries.forEach((entry) => {
    entry.target.animate(
      {
        translate: ["0 0", "20vw 0"],
        opacity: [0, 1],
      },
      {
        duration: 2000,
        easing: "ease",
        fill: "forwards",
      }
    );
  });
};

const slideLeftObserver = new IntersectionObserver(slideLeft);
const slideRightObserver = new IntersectionObserver(slideRight);
// data属性の値によってスライド方向を設定する
imageItems.forEach((item) => {
  if (item.dataset.move === "slideLeft") {
    slideLeftObserver.observe(item);
  } else {
    slideRightObserver.observe(item);
  }
});
