function stars(){
    var lines = Number(document.querySelector('#line').value) ;

    let response = '*';
    var i = 0;
    while(i<lines){        
        response *= i +'<br>' 
        i++;
    }
    
    document.getElementById('p').innerHTML = response ;
}