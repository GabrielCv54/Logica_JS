const times = [];

function addClubs(){
   var add = (document.getElementById('add').value );
   

   times.push(add)
   alert('Clube adicionado com sucesso!!')
   console.log(times)
   for(value of times){
      if(times[value]){
         alert('Time ja existe na lista , adicione outro')
      } 
   }
   listAll()
}

function listAll(){
   var listagem = document.getElementById('times');
   var i = 0
   listagem.textContent = ''

   times.forEach(function(time){
      var all = document.createElement('p')
      i++
      all.textContent = `${i}°`+`${time}` + `\n`
      listagem.appendChild(all)
   
 })
}

function tableOfGames(){
   var allClubs = document.querySelector('div#clubs');
   var copy = times.slice();
   copy.reverse();
   var first = copy[0];
   var last = copy[copy.length - 1]; 
   var p = document.createElement('p'); // o parágrafo que vai armazenar cada um dos jogos
   //p.textContent = ''
   var content = ''

   for(let i=0; i<times.length && i<copy.length; i++){
         if(times.length % 2 == 0){
     // if(times[i] == times[0]){
      //  times[i] += ' x ' + ` ${last}`;
      //}else{
      content = (`${times[i]}  X  ${copy[i]} \n`);
      p.textContent = (content)      
     // p.textContent = times[i];
     // p.textContent+='';

      allClubs.appendChild(p)
   
      }else{
      window.alert('Não será possível realizar os jogos, a quantidade de times não bate!!')
       }
      }
   
    console.log(copy)
    console.log(content)
   }



const table = document.getElementById('table')
table.addEventListener('click',tableOfGames)