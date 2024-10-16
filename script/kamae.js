const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const lists = document.querySelectorAll(".list");
const kaisetu = document.querySelector(".shousai-kamae-bad");
let count = 0;
// 「<がクリックされたら、画像が1つ戻る
prev.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = 1;
  }
  prev_next();
  changeColor(lists);
  changeText(count);
});
// 「>がクリックされたら、画像が1つ進む
next.addEventListener("click", () => {
  count++;
  if (count > 1) {
    count = 0;
  }
  prev_next();
  changeColor(lists);
  changeText(count);
});
//インジケータの色が変わる関数
const changeColor = (lists) => {
  switch (count) {
    case 0:
      lists[0].style.backgroundColor = "#000";
      lists[1].style.backgroundColor = "#fff";
      break;
    case 1:
      lists[0].style.backgroundColor = "#fff";
      lists[1].style.backgroundColor = "#000";
      break;
  }
};

const prev_next = () => {
  const img = document.querySelector(".bati_bad_img");
  const i = count;
  img.src = `../images/kamae/bati_bad${i}.jpg`;
};

// 画像ごとにコメントを付け加える
const changeText = (number) => {
  switch (number) {
    case 0:
      kaisetu.textContent = "バチとバチの間にすき間が空いている。";
      break;
    case 1:
      kaisetu.textContent = "バチの先が下を向いている。";
      break;
  }
};
