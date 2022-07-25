let putnumber = document.getElementById('number');
let b1 = document.getElementById('button');
let outputnum = document.getElementById('output');
function shownum(){
  let listnumber = '';
  let numbers = Number(putnumber.value);
  for (let i = 1 ; i<numbers;i++){
    if ((i*i) === numbers) {
      listnumber += '<p>';
      listnumber += i + " คูณ " + i + " ได้ตรงกับ " + numbers;   
      listnumber += " ค่ารูทของ " + numbers + " คือ " + i;
      listnumber += '</p>';
      outputnum.innerHTML = listnumber;
      
    }else if((i*i)<numbers){
      outputnum.innerHTML = "<p>" + i + " คูณ " + i + " = " + (i*i) + "</p>"
    }
  }
}
b1.addEventListener("click", shownum);



