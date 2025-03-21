var list = [];

function guessNumber(){
    var pos = list.indexOf(number); 
    var number = Number.parseInt(Math.random()*100);
    var digit_num = Number.parseInt(document.querySelector('#numero'));
    var erros = 0 ;
    var chances = 10;
    
      while(erros<=chances){
        if(digit_num!=number){
            list.push(digit_num);
            erros-=1;
            chances+=1;
           document.getElementById('erro').textContent += erros;
           document.getElementById('chance').textContent += chances;
         
        }else{
            alert('Parabéns ,você acertou!!');
        }
    }

}