//女沼のささらとは_歴史_画像
const imageItems = document.querySelectorAll(".rekishi-item");

// 左からスライドする関数
const slideLeft = (entries, obs) => {
  entries.forEach((entry) => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.animate(
          {
            translate: ["100vw 0", "0 0"],
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
315;
// 右からスライドする関数
const slideRight = (entries, obs) => {
  entries.forEach((entry) => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.animate(
          {
            translate: ["-50vw 0", "0 0"],
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