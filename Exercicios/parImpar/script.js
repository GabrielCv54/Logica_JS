function pairOdd(){
    var number = parseInt(document.getElementById('num').value );

    if(number % 2 == 0){
        document.getElementById('result').innerHTML = "É Par!!"
    }else{
        document.getElementById('result').innerHTML ='É ímpar!!'
    }
}