//os-btnというidを持つHTML要素を取得し、定数に代入する
const osBtn = document.getElementById('btn');
const textChange = document.getElementById('text');

// HTML要素がクリックされてから2秒後にイベント処理を実行する
osBtn.addEventListener('click' ,() => {
//h2要素のテキストを書き換える
    setTimeout(() => {
        textChange.textContent = 'ボタンをクリックしました'
    },2000);    
});


