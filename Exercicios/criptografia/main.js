
 function cryptograph(){
    var mess = (document.querySelector('input#mess').value);
    var crypto = document.querySelector('p#crypto');
    //var desCrypto = document.getElementById("btnDescrypto");
    crypto.textContent = ''

     if(mess === ''){
            alert('Digite uma mensagem para que possamos conferi-lá!!')
        }else{

        for(let i=0; i<mess.length; i++){
        if(i % 2 == 0 && mess[i] != ' '){
            crypto.textContent += mess[i]
            console.log(crypto)
        }
       

    }
    
}
}

function descryptograph(){
    var mess = document.querySelector("input#mess").value;
    var crypto = document.querySelector("p#crypto");
    crypto.textContent = ''

    if(mess === ''){
            alert('Digite uma mensagem para que possamos conferi-lá!!')
        }else{

        for(let i=0;i<mess.length;i++){
       
            crypto.textContent += mess[i]
            console.log(crypto)
        
    }
}
}

