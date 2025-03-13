function perfectNumber(){
   var n = Number(document.querySelector('#number').value);
   var divisors = document.querySelector('#divisors_qttd');
   var isPerfect = document.getElementById('perfect');
   const divisores =[]

   let i = 0
   let soma
   for(i; i<=n; i++)
      if(n % i == 0  ){
      divisores.push(i)
      soma+=divisores[i]
      
      if(soma == n){
       isPerfect.innerHTML = `${n} é perfeito!`
       divisors.innerHTML = `Divisores de ${n} : ${divisores}`
      }
   }

}