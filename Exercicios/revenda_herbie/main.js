var cars = [];

function adicionarCarro(){
    var model = document.querySelectorAll('p#model').value;
    var price = document.querySelectorAll('p#price').value;
    //var add = document.getElementById('add').value;

    if((price)=='' || (model)=='' ){
        alert('Não há valores inseridos , preencha os campos corretamente!')
    }else{
    cars.push({'Modelo: ':model,'Preço(R$)':price})
    window.alert('Carro adicionado com sucesso!!')
    for(var i=0;i<cars.length;i++){
    console.log(cars[i])
    }
}
}

function listAll(){
    var listagem = '';
    var len = cars.length
    for(var i = 0;i<len;i++){
        listagem += `Modelo:${cars[i]['Modelo: ']}`+ '---' + `Preço: ${cars[i]['Preço(R$)']}` + '\n'
    }
    
    added.innerHTML = listagem;
}


function filterByPrice(){

}