const times = [];

function addClubs(){
   var add = (document.getElementById('add').value );
   

   times.push(add)
   alert('Clube adicionado com sucesso!!')
   console.log(times)

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
   
   
   for(let i = 0;i<times.length;i++){
      if(times.length % 2 == 0){
         if(times[i] % 2==0){
          allClubs.textContent = `${times[i]}` + '\n'
      }else{
         times[i] = rightClub
      }
 
      allClubs += `x ${rightClub} `
   }else{
         alert('Não será possível realizar os jogos, a quantidade de times não bate!!')
      }
   }
}