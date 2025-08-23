const badgeArray = []

function badgeGenerator(){
    var participant = String(document.querySelector('input#n').value) ;
    var res = document.querySelector('div#response')

    if(participant ===''){
        window.alert('Não é possível criar o crachá, o campo nome está vazio!!')
    }

   // participant.replace(/\s+/g,'') // Ignora espaços na string toda;
    var participantName = participant.split(' '); /// cria um array com cada palavra da string;
    var firstName = participantName[0];
    var lastName = participantName[participantName.length - 1];

    var badge = (firstName + ' ' +lastName);
    badgeArray.push({'primeiro nome':firstName,'último nome':lastName});
    console.log(badgeArray);


    var p = document.createElement('p');
    p.textContent = badge;
    res.appendChild(p);

    alert(`Crachá criado!! ${badge}`);

}

const buttonBadge = document.querySelector('button#badge');
buttonBadge.addEventListener('click',badgeGenerator);

 