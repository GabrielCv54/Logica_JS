function password(){
    var passw = document.getElementById('password').value ;
    var response = document.querySelector('div#res');
    var passwUpper = passw.match(/[A-Z]/g);
    var passwLower = passw.match(/[a-z]/g);
    var passwNum = passw.match(/[0-9]/g);
    var passSym = passw.match(/\W|_/g);
    var size = passw.length;
    var isNull = passw.match(/[null]/g);
    var p = document.createElement('p');
    p.style.color = 'red'

    if(passw === '' || !isNull || size < 8 || size > 15){
        p.textContent = 'A senha não pode estar vazia ! E deve possuir entre 8 a 15 caracteres'
        response.appendChild(p);
    }


        if(!passwUpper){
                p.textContent = 'A senha precisa ter pelo menos uma letra maiúscula!';
                response.appendChild(p);

        }else if(!passwLower){
                p.textContent = 'A senha deve possuir no mínimo uma letra minúscula!';
                response.appendChild(p);

        }else if(!passwNum){
                p.textContent = "A senha deve possuir um número!";
                response.appendChild(p);
         }else if(!passSym){
                p.textContent = 'Deve haver um símbolo na senha';
                response.appendChild(p)
        }else{
                p.textContent = `Parabéns! A senha : ${passw} foi aprovada pelo sistema`
                p.style.color = 'green'
                response.appendChild(p)

            }
        

    

}

var botao = document.querySelector('button#submit')
botao.addEventListener('click',password);