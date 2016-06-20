var number = Math.floor(Math.random()*3);
var i=0;
while(i<10)
{
var answer = parseInt(window.prompt('数当てゲーム。0~2の数字を入力してください！'));

var message;
if(answer == number){
  message = 'あたり！';
  break;
}else if(answer < number){
  message = '残念！もっと大きいです';
  i+=1;
}else if(number < answer){
  message = '残念！もっと小さいです';
  i+=1;
}else{
  message = '0~2の数字を入力してください';
  i+=1;
}


document.getElementById('choice').textContent = message;
}
