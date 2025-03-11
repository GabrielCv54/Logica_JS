function Caliper(){
  var price = document.getElementById('value').value;
  
   
   if(price<=1){
      document.getElementById('time').innerHTML = `Tempo: 30min`;
      document.getElementById('change').innerHTML = `Troco R$: ${1-price}`;
   }else if(price<=1.75){
    document.getElementById('time').innerHTML ='Tempo : 60min'
    document.getElementById('change').innerHTML = `Troco R$: ${1.75-price}`;
   }
    else if(price>1.75 && price<=3){
         document.getElementById('time').innerHTML = 'Tempo : 60min'
         document.getElementById('change').innerHTML = `Troco R$ ${price-1.75}`
    }else{
    document.getElementById('time').innerHTML = 'Tempo : 120min';
    document.getElementById('change').innerHTML = `Troco R$: ${price-3}`;
   }
 
}