const numbers = []

function add(){
  var num = Number(document.getElementById('num').value);
  
  if(isNaN(num) || num === ''){
        alert('É necessário adicionar um número ,não é permitido espaço vazio')
  }else if(num in numbers){
    alert('O número já está na lista')
  }else{
  numbers.push(num)
  window.alert(`Número ${num} adicionado!!!`)
}

console.log(numbers)

}

const button = document.getElementById('ad')
button.addEventListener('click',add)

function analisysNumbers(){
    var res = document.querySelector('p#res');
    var ordenate = numbers.slice()
    ordenate.sort(function(a,b){
      return a - b;
    })
   // var reversed = numbers.reverse()
    let i = 0
     
    console.log(ordenate)
    while(i < numbers.length) {
      if(ordenate[i] == numbers[i]){
         res.textContent = 'Os números estão em ordem crescente!'
      }else if(numbers.length === 1 || ordenate.length === 1){
         res.textContent = 'Ainda não há números o suficiente para analisar!!'
      }else{
        res.textContent = 'Os números não estão em ordem crescente!'
      }
      i++
    }
      console.log(numbers,ordenate)

}

const buttonAnalisys = document.getElementById('analise')
buttonAnalisys.addEventListener('click',analisysNumbers)

const buttonReset = document.getElementById('reset')
buttonReset.addEventListener('click',location.reload)
