const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let count = 0;
// 「<がクリックされたら、画像が1つ戻る
prev.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = 2;
  }
  prev_next();
});
// 「>がクリックされたら、画像が1つ進む
next.addEventListener('click',() =>{
  count++
  if(count > 3){
    count = 1;
  }
  prev_next();
})


const prev_next = () =>{
  const img = document.querySelector('.shousai-img-yumi-bad');
  const i = count % 3;
  img.src = `../images/yumi_bad${i}.jpg`;
}


