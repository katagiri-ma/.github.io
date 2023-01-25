// イベントの設定方法

// function sayHorror(){
//   window.alert("The Horror!");
// //   console.log("The Horror!");
// }
//   hor.addEventListener("click", sayHorror);
// horはconst hor = document.getElementsByClassName("site-head")[0];

// 配列を作ってその中からお題をとる
const questionList = ["ヌンチャク", "キムタク", "アロー浅岡",];

// questionList[0]//nunchaku

// 問題文をランダムに表示したい
// Math.random()メソッド　=>　乱数を生成
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// const rnd = Math.floor(Math.random() * questionList.length);
// questionList.lengthをランダム生成

const theme = document.getElementById("theme");
// theme.textContent = questionList[rnd];
// // themeにquestionListをランダム生成　
// theme.innerText = theme.textContent;
// // document.body.append(theme.textContent);//意図した場所に出ない
// // theme.append(theme.textContent);//意図した場所に出ない


// console.log(questionList[rnd]);  //確認　
// console.log(theme.textContent);  //確認　

// もしユーザー入力した文字がtheme.textContentと同じなら(theme.textContent === ユーザー入力)次の問題
// もし違えば間違い
// typeInputに入力した文字列は　要素.input.value で取得可能
function getrandom(){
    const rnd = Math.floor(Math.random() * questionList.length);

    theme.textContent = questionList[rnd];
    theme.innerText = theme.textContent;
    // return theme.innerText = questionList[rnd];
    // bool.textContent = "判定";
    // bool.innerText = bool.textContent;
    // theme.textContent = questionList[rnd];
    // return theme.innerText = theme.textContent;
}
// function init() {
//     const rnd = Math.floor(Math.random() * textList.length);
    
//     subject.textContent = textList[rnd];
//     form.input.value = '';
//     form.input.focus();
// }

const typeImput = document.getElementById("typeInput");

function getValue(){
  
    const inputStr = document.getElementById("typeInput").value;
    const bool = document.getElementById("bool");
    if(inputStr === theme.textContent){
        bool.textContent = "正解！";
        bool.innerText = bool.textContent;
        getrandom();
    }else{
        bool.textContent = "残念";
        bool.innerText = bool.textContent;
    }   
    typeImput.value = "";
    
    // console.log(bool.innerText);
    // if(bool.innerText === "正解！"){
    //     getrandom();
    // }
    // console.log(bool.innerText);
}
const myButton = document.getElementById("button");
myButton.addEventListener("click", getValue);

getrandom();

// function doReload() { 
