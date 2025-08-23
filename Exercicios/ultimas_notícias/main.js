const news_array = []

function addNews() {
    var news = document.getElementById('news').value
    if(news ===''){
        alert('Insira uma notícia!')
    }else{
    window.alert('Notícia adicionada com sucesso')
    news_array.push(news)
    }
}

news_array.reverse()

function listOfNews() {
    var lista = document.querySelector('div#lista')
    lista.textContent = ''
    let i = 0
     
    news_array.forEach(news =>{
    i++;        
    var p = document.createElement('p');
    p.textContent =`${i}°Notícia- ` + `${[news]}`;
    lista.appendChild(p)
 
    
    })
   
    console.log(news_array)

}