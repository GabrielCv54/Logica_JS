function checkVelocity(){
    var allowed = parseFloat(document.getElementById('perm').value);
    var driver = parseFloat(document.getElementById('user').value);
 
    if(driver<(allowed)){
      document.getElementById('multa').innerHTML = 'Situação : Sem multa'
    }else if(driver <= (allowed+(0.2*allowed))){
       document.getElementById('multa').innerHTML = 'Situação : Multa leve!'
    }else{
        document.getElementById('multa').innerHTML = 'Situação: Multa grave!'
    }
 
}