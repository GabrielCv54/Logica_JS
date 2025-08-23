const statesBr = ['SP','RJ','MG','ES',"AC","AL",'AP','AM','BA','CE','DF','GO','MA','MT','MS',"PA",'PB','PR','PE',"PI","RN","RS",'RO','RR','SC','SE','TO']

const clients = []

function System(){
  var name = document.querySelector('input#name').value;
  var age = document.querySelector('input#age').value;
  var email = document.querySelector('input#em').value;
  var state = document.getElementById('state').value;
  var finna = document.querySelector('div#finally')
  var paragraph = document.getElementById('pa');
  var p = document.createElement('p');
  var pos = 0;

  clients.push({'pessoa':name,'idade':age,'email':email,'estado':state})
  alert(`Nome: ${name} | Idade: ${age} | Email: ${email} | Estado: ${state}`)
  ///console.log(clients)

 try{
    if(typeof name != 'string' ){
     throw 'Exceção: O nome dever ser uma string'
    }else if (age < 18){
        throw'A idade só pode ser maior que 18 anos'
    }else if(!email){
      p.innerHTML = 'Email não preenchido'
      throw 'O email é obrigatório'
    }else if(state != statesBr[pos]){
       throw 'Esse estado não existe no Brasil ou não foi digitado corretamente!'
    }
 
     showAllClients()

   
    }catch(erro){
        console.log(erro)
    }finally{ 
        var finna = document.querySelector('div#finally')
        let fim = document.createElement('p')
        fim.innerHTML = 'Programa de Try Catch' + '<br>' 
        finna.appendChild(fim)
    }
}


function showAllClients(){
  var div = document.querySelector('div#show');
  let i = 0;
  div.textContent = ''

  clients.forEach(cli => {
   var p = document.createElement('p');
    i++
    p.textContent = `Cliente ${i}°` + `${cli.pessoa}` + '\n'
    div.appendChild(p)
  })

}

console.log(clients)