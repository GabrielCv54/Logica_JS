function Fruit(){
    var fruit = (document.getElementById('fruit').value);
    var number = Number.parseInt(document.getElementById('n').value);    
    
    var count =0
    let response = ''

while(count < number){
          response += fruit + '*' 
          count++
          if(count==number){
            response += '.'
          }
    }
    document.getElementById('response').innerHTML = response
}

