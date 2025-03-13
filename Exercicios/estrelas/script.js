function stars(){
    var lines = Number(document.querySelector('#line').value) ;

    let response = ''
    let i = 0
    while(i<lines){
        i++
        response += '*' + '<br>'
        if(i==lines){
            response+='.'
        }
    }
    document.getElementById('p').innerHTML = response  

  
}