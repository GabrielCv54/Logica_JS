function lanHouse(){
    var price_minute = document.getElementById('price').value;
    var time_use = document.getElementById('time').value;
    var calc = (15+time_use)
    var price = `Valor a pagar R$:${calc}`

    document.getElementById('total').innerHTML = price
}