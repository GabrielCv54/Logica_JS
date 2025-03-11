function v1(){
  var med =  document.getElementById('med').value ;
  var price = document.getElementById('price').value; 
  var calc = (price*2)-(price/2); 
  var result = `Leve 2 por apenas R$:${calc}`;
  var prom = `Promoção de ${med}`
  document.getElementById('prom').innerHTML = prom
  document.getElementById('result').innerHTML = result

}