//os-btnというidを持つHTML要素を取得し、定数に代入する
const osBtn = document.getElementById('btn');
// HTML要素がクリックされたときにイベント処理を実行する
osBtn.addEventListener('click' ,() => {
//h2要素のテキストを書き換える
    const textChange = document.getElementById('text');
    textChange.textContent = 'ボタンをクリックしました'
});


