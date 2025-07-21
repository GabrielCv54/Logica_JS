const funny = []
 
function funnyToys(){
  var name = document.getElementById('name').value ;
  var age = document.getElementById('age').value;
  var sameAge = funny.some(kid => kid.idade === age);
  var sameName = funny.some(kid => kid.criança === name);
  
  if(name === '' || age ===''){
       window.alert('Erro! Esse campo (idade ou nome) deve ser preenchido')
  }else if(age > 12 || age < 0){
        window.alert('Erro! crianças é só até os 12 anos!!')
        
  }else if(sameAge && sameName){
         alert('Erro! A criança já foi adicionada!!')
         return
  }else{
      funny.push({'criança':name,'idade':age});
      alert('Criança adicionada com sucesso!');
      return
  }


}

function showAll(){
   const res = document.querySelector('div#res');
   res.textContent = ''

   funny.forEach(function(kid){
      var result = document.createElement('p');
      result.textContent=`${kid.criança} ` + ' ------ ' + `${kid.idade} anos`;
      res.appendChild(result);
      
  })
  
  console.log(funny)

  
  
}

function filterByAge(){
  /*var result = document.querySelector('div#ages');

  var filter = funny.sort(function(firstElement,lastElement){
     return (firstElement - lastElement);
   })
  
   result.textContent = filter.join(',')*/

  
  var age1 = 0;
  var age2 = 0;
  var age3 = 0;
  var age4 = 0;
  var age5 = 0;
   
  var result = document.querySelector('div#age');
  var result2 = document.querySelector('div#age2');
  var result3 = document.querySelector('div#age3')
  result.textContent = ''

  funny.forEach(function(kid){
    for(kid in funny){
     if(kid.idade === 1){
      const kids = []
      age1+=1
      kids.push(kid.criança)
      var p = document.createElement('p');
      p.textContent = `Crianças com 1 ano:${age1} crianças` + `${[kids.join(',')]}` + '\n'
      result.appendChild(p)

     }else if(kid.idade === 2){
       const kids = []
       age2+=1
       kids.push(kid.criança)
       let p = document.createElement('p')
       p.textContent = `Crianças com 2 anos:${age2} crianças` + `${[kids.join(',')]}` + '\n'
       result.appendChild(p);

     }else if(kid.idade === 3){
      const kids =[]
      age3+=1
      kids.push(kid.criança)
      let p = document.createElement('p')
      p.textContent = 'Crianças com 3 anos' +`${age4} crianças`+ `${[kids.join(',')]} ` + '\n'
      result.appendChild(p)
      
     }else if(kid.idade === 4){
      const kids =[]
      age4+=1
      let p = document.createElement('p')
      kids.push(kid.criança)
      p.textContent = 'Crianças com 4 anos:'+ `${age4}crianças`+ `${[kids.join(',')]}` + '\n'
      result.appendChild(p)

     }else if(kid.idade === 5){
      const kids = []
      age5+=1
      kids.push(kid.criança)
      let p = document.createElement('p')
      p.textContent = 'Crianças com 5 anos:'+ `${age5}crianças`+ `${[kids.join(',')]}` + '\n'
      result.appendChild(p)
     }}
  });


}