const times = [];

function addClubs(){
   var add = String(document.getElementById('add').value );
   var list = document.getElementById('list');
   var table= document.getElementById('table');
   let listagem = document.getElementById('times');
  
   let i = 0
   if(add == true){ 
      for(i;i< times.length;i++){
        listagem.innerHTML = (i+1) + add + '<br>'
   }
}
}