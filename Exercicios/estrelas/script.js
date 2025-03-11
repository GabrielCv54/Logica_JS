function stars(){
    var lines = Number(document.querySelector('#line').value) ;

    let response = ''
    let i = 0
    while(i<lines){
        let stars=0
        i++
        stars++
        stars+='*'
        response += stars + '<br>'
    }
    document.getElementById('p').innerHTML = response  

  
}