const funny = []

function funnyToys(){
  var name = document.getElementById('name')
  var age = document.getElementById('age')
  
  if(name === '' || age ===''){
       alert('Esse campo (idade ou nome) deve ser preenchido')
  }

  funny.push({'Criança':name,'Idade':age})
  alert('Criança adicionada com sucesso!')


}

function showAll(){
  
}

/* var numbers = [102,225,69,58]
numbers.reverse()

console.log(numbers.join(',')) */