const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const kaisetu = document.querySelector(".shousai-bad-coment");

let count = 0;
// 「<がクリックされたら、画像が1つ戻る
prev.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = 2;
  }
  console.log(count);
  prev_next();
  changeText(count);
});
// 「>がクリックされたら、画像が1つ進む
next.addEventListener("click", () => {
  count++;
  if (count > 2) {
    count = 0;
  }
  console.log(count);
  prev_next();
  changeText(count);
});

const prev_next = () => {
  const img = document.querySelector(".shousai-img-yumi-bad");
  const i = count % 3;
  img.src = `../images/yumi_bad${i}.jpg`;
};

// 画像ごとにコメントを付け加える
const changeText = (number) => {
  switch (number) {
    case 0:
      kaisetu.textContent = "右手が下がってしまい、顔の側において構えていない。";
      break;
    case 1:
      kaisetu.textContent = "つま先立ちになっており、両足を地面につけて構えていない。";
      break;
    case 2:
      kaisetu.textContent = "頭が下がっており、バチの先を見て構えていない。";
      break;
  }
};
