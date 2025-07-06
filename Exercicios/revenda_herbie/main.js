var cars = [];

function adicionarCarro(){
    var model = document.querySelector('input#model');
    var price = document.querySelector('input#price');
    var add = document.getElementById('add');

    if(add){
        add.textContent = ''
    }

    if(!model || !price){
          console.error('Não existem esses id de model e price!!')
          return
    }

    if(price && model){
         var priceValue = price.value
         var modelValue = model.value
         var priceNumber = Number.parseFloat(priceValue)

        if(priceNumber===NaN || modelValue===''){
            alert('Não há valores inseridos , preencha os campos corretamente!')
            return
        }else if(isNaN(priceNumber)){
          alert('O valor do preço não é possível de ser inserido')
          return
        }else{
        cars.push({"carro":modelValue,"preço":priceNumber})
        window.alert('Carro adicionado com sucesso!!')

        model.value = ''
        price.value = ''
        model.focus()
   
         listAll()

    }
       
  }


}

function listAll(){
    var added = document.getElementById('added');
    if(!added){
        console.error('Não existe ')
        return
    }
    added.innerHTML =''


     if(cars.length === 0){
        const void_cars = document.createElement('p')
        void_cars.innerHTML = 'Não há carros ainda!!'
        added.appendChild(void_cars);
        return
    }
     
    for(var i = 0;i<cars.length;i++){
       const listagem = document.createElement('p')
       listagem.innerHTML=`Modelo:${cars[i]['carro']}`+ '---' + ` Preço: ${cars[i]['preço']}` + '<br>'
       added.appendChild(listagem)
       
        }


}

var botaoListar = document.getElementById('list')
if(botaoListar){
botaoListar.addEventListener('click',listAll)
}else{
    console.error('Esse botão não existe!!!')
}

function filterByPrice(){

}
