function emailGenerator(){
    var nameFunc = document.getElementById('func').value ;
    var em = document.querySelector('div#em');
    const enterpriseEmail = '@enterprise.com.br';

    if(nameFunc === ''){
        alert('Nenhum nome inserido. Tente de novo!!!');
    }

    var arrName = nameFunc.split(' ');
    var firstLetter = arrName[0][0];
    var secondLetter = arrName[1][0];
    var email = ((firstLetter + secondLetter) + enterpriseEmail);

    var parágrafo = document.createElement('p');
    parágrafo.innerHTML = `Email do funcionário: ${email.toLowerCase()}`;
    em.appendChild(parágrafo);

    console.log(arrName);
    console.log('email criado com sucesso!');


}

