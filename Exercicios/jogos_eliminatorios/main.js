const times = [];

function addClubs(){
   var add = (document.getElementById('add').value );
   

   times.push(add)
   alert('Clube adicionado com sucesso!!')
   console.log(times)

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
   //copy.reverse();
   var first = copy[0];
   var last = copy[copy.length - 1]; 


   for(let i=0; i<times.length; i++){
    if(times.length % 2 == 0){
      if(times[i] == times[0]){
        times[i] += ' x ' + ` ${last}`;
      }else{
         times[i] += 'x' `${copy[i]}\n`;
   } 
      var p = document.createElement('p');
      p.textContent += times[i];
      p.textContent+='';

      allClubs.appendChild(p)
   
   }else{
      window.alert('Não será possível realizar os jogos, a quantidade de times não bate!!')
       }
   }
    console.log(copy)

}


const table = document.getElementById('table')
table.addEventListener('click',tableOfGames)