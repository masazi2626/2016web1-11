var number = Math.floor(Math.random()*3);

var answer = parseInt(window.prompt('数当てゲーム。0~2の数字を入力してください！'));

var message;
if(answer == number){
  message = 'あたり！';
}
do{
if(answer < number){
  message = '残念！もっと大きいです';
}else if(number < answer){
  message = '残念！もっと小さいです';
}else{
  message = '0~2の数字を入力してください';
}
while(answer < number && number < answer)

document.getElementById('choice').textContent = message;
