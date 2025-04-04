/* let text = ''
for(let i=0;i<10;i++){
  text += 2 +' x '+ i + ' = ' + `${2*i}` + '\n'
  
}
console.log(text) */

/* function countPrime(){
  var number = document.getElementById('number');
  var response = document.getElementById('response');

  var n = Number(number.value);

  if(n==0|| isNaN(n)){
    alert('Inválido')
    number.focus()
    return
  }
  var n_divisors = 0

  for (var i =1;i<=n;i++){
    if(n % i == 0){
      n_divisors++
    }
  }
  if(n_divisors==2){
    response.textContent = n + ' é Primo'
  }else{
    response.textContent = n + ' Não é primo'
  }
  var hasDivisor=0

  for(var i =2;i<=n;i++){
   if(n%i==0){
    hasDivisor  = 1
    break
  }
  }

  if(n>1 &&  hasDivisor == false){
    response.textContent = n + ' é primo'
  }else{
    response.textContent = n + ' Não é primo'
  }
} */


var bigger = false;
var ages = [22,19,45,88,74,32,85];
for(var i = 0;i<ages.length;i++ ){
  if(ages[i] < 18){
    console.log(ages[i])
    bigger = true;
  }
}

if(!bigger){
   console.log('Não existem maiores de idade na lista!')
}