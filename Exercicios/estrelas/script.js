function stars(){
    var lines = Number(document.querySelector('#line').value) ;

    let response = ''
    let i = 0
    while(i<lines){
        i++
        
        response += '*' 
        if(i==lines){
            response+='<br>'
        }
        
      
    }
    document.getElementById('p').innerHTML = response  

  
}