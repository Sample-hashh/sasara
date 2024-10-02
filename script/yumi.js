const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const kaisetu = document.querySelector(".shousai-bad-coment");
const lists = document.querySelectorAll(".list");
let count = 0;
// 「<がクリックされたら、画像が1つ戻る
prev.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = 2;
  }
  prev_next();
  changeText(count);
  changeColor(lists);
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
  changeColor(lists);
});
//インジケータの色が変わる関数
const changeColor = (lists) =>{
  switch(count){
    case 0:
      lists[0].style.backgroundColor = "#000";
      lists[1].style.backgroundColor = "#fff";
      lists[2].style.backgroundColor = "#fff";
      break;
    case 1:
      lists[0].style.backgroundColor = "#fff";
      lists[1].style.backgroundColor = "#000";
      lists[2].style.backgroundColor = "#fff";
      break;
    case 2:
      lists[0].style.backgroundColor = "#fff";
      lists[1].style.backgroundColor = "#fff";
      lists[2].style.backgroundColor = "#000";
      break;   
  }
}


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
