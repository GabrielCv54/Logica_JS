const funny = []


function funnyToys(){
  var name = document.getElementById('name').value ;
  var age = document.getElementById('age').value;
  var indexAge = funny.indexOf(age)
  var indexName = funny.indexOf(name)
  
  if(name === '' || age ===''){
       alert('Esse campo (idade ou nome) deve ser preenchido')
  }else if(age > 12 || age < 0){
        alert('Erro! crianças é só até os 12 anos!!')
        funny.pop()
  }else if(indexAge>1 && indexName > 1){
         alert('A criança já foi adicionada!!')
         funny.pop()
  }else{
      funny.push({'criança':name,'idade':age});
      alert('Criança adicionada com sucesso!');
      return
  }


}

function showAll(){
   const res = document.querySelector('div#res');

    
    funny.forEach(function(){
      var result = document.createElement('pre');
      result.innerHTML=`${funny.criança} ` + '------' + `${funny.idade} anos` + '<br>';
      result.innerHTML='';
      res.appendChild(result);
    
  })

  console.log(funny)
  
}

function filterByAge(){
  
}
/* var numbers = [102,225,69,58]
numbers.reverse()

console.log(numbers.join(',')) */