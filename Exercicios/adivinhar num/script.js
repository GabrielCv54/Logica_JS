var list = [];
var number_sorted = Number.parseInt(Math.random()*100);
const chances = 10;

function guessNumber(){
    var pos = list.indexOf(digit_num); 
    var digit_num = Number.parseInt(document.getElementById('number').value);

    if(digit_num == '' || digit_num > 100 || digit_num<0 ){
        window.alert('Preencha o campo de aposta corretamente.');
        window.alert('Não pode ser menor que 0 , maior que 100 e nem vazio!');
        digit_num.focus()
        return

    }
    var erros = 0 ;
    var dica = document.getElementById('dica');
    
        if(digit_num==number_sorted){
            list.push(digit_num);  
            document.getElementById('chance').textContent = chances;
           // erros+=1    
            document.getElementById('erro').innerHTML = erros
            dica.textContent = "É um número entre 1 e 100!"

            }else{
                if(pos >= 0){
                    window.alert('Você já apostou esse número!')

                }else{
                    var qttd_erros = list.length;
                    var num_chances = chances - qttd_erros
                    erros.textContent = qttd_erros + '(' + erros.join(',') + ')';
                    chances.textContent = num_chances;

                    if(num_chances==0){
                        alert('Já acabou')
                        dica.textContent = `O número sorteado foi ${number_sorted}`

            }
        }
    }
}

function play_again(){
    location.reload()
}