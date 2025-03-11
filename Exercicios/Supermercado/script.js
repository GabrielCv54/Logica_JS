function promotion(){
   var product = document.getElementById('product').value;
   var price = parseFloat(document.getElementById('price').value);
   var account = ` ${product} - Promoção: leve 3 por apenas R$ ${((price*0.5)*3) + (price) }`
   var third_product= `O 3° Produto custa apenas R$:${(price*0.5)}`
   document.getElementById('promotion').innerHTML = account   
   document.getElementById('third').innerHTML = third_product
}