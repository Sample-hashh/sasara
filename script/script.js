// ローディングからの画面遷移
const loading = document.querySelector('.loading');
window.addEventListener('load',()=>{
  loading.animate(
    {
      opacity:[1,0],
      visibility:'hidden',
    },
    {
      duration:3000,
      easing:'ease',
      fill:'forwards',
    }
  );
})
/* ボタンの切り替え */
const toshi_url = {
  doutyuu_fraont: "https://www.youtube.com/embed/1hQEgl_sfSk?si=vl3guWWwnxL6nc3i",
  doutyuu_diagonal: "https://www.youtube.com/embed/XR9-YH3Er8E?si=Ps5_YrRbAuo5-npi",
  dewa_fraont: "https://www.youtube.com/embed/RIODvZCKc9c?si=ONhTINRnauf1pyHy",
  dewa_diagonal: "https://www.youtube.com/embed/GLB-OUOHed0?si=4YzPZa4SS4eafzON",
  hiraniwa_fraont: "https://www.youtube.com/embed/TnFeCoOJayk?si=oYtPx9rg6CMDuM8a",
  hiraniwa_diagonal: "https://www.youtube.com/embed/jxPujh6F5tw?si=oSdO_6VKqrutCaCx" 
}
// 通し動画 正面/ななめのurlオブジェクト
const change = (btn, iframe, fraont_url, diagonal_url) => {
  if (btn.textContent === 'ななめver') {
    btn.textContent = '正面ver';
    iframe.src = diagonal_url;
  } else {
    btn.textContent = 'ななめver';
    iframe.src = fraont_url;
  }
}
// 道中太鼓_正面とななめの切り替え
const btn1 = document.querySelector('.btn1');
const iframe1 = document.querySelector('.iframe1');
btn1.addEventListener('click', () => {
  change(btn1, iframe1, toshi_url.doutyuu_fraont, toshi_url.doutyuu_diagonal);
});
// 出羽_正面とななめの切り替え
const btn2 = document.querySelector('.btn2');
const iframe2 = document.querySelector('.iframe2');
btn2.addEventListener('click', () => {
  change(btn2, iframe2, toshi_url.dewa_fraont, toshi_url.dewa_diagonal);
});
// 平庭_正面とななめの切り替え
const btn3 = document.querySelector('.btn3');
const iframe3 = document.querySelector('.iframe3');
btn3.addEventListener('click', () => {
  change(btn3, iframe3,toshi_url.hiraniwa_fraont,toshi_url.hiraniwa_diagonal);
});
