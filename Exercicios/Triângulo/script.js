function Triangle(){
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

  

        if(a == b && a==c || b==c && b==a ){
          document.getElementById('type').innerHTML = `É um triângulo Equilátero `
        }else if(a==b && a!=c || b==c && b!=a || a==c){
          document.getElementById('type').innerHTML =`É um triângulo Isósceles!`
        }else if(a!=c && a!=b || b!=c && b!=a ){
             document.getElementById("type").innerHTML = "É um triângulo Escaleno"
        }  if(a+b > c || b+c > a || a+c >b){
           document.getElementById('response').innerHTML= "Esses lados não podem formar um triângulo!"
           document.getElementById('type').innerHTML = null
        }
    
}