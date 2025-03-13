function stars(){
    var lines = Number(document.querySelector('#line').value) ;

    let response = ''
    let i = 0
    while(i<lines){        
        response += '*' +'<br>' 

        i++
    }
    
    document.getElementById('p').innerHTML = response 
}