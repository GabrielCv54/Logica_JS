function perfectNumber(){
   var n = Number(document.querySelector('#number').value);
   var divisors = document.querySelector('#divisors_qttd');
   var isPerfect = document.getElementById('perfect');
   const divisores =[]

   let i = 0
   let soma=0
   for(i; i<=n; i++)
      if(n % i == 0 && i!=n ){
      divisores.push(i)
      soma+=i

     /*  for(divisor in divisores){
         soma+=divisores[divisor]
      } */
      if(soma != n){
        isPerfect.innerHTML= `${n} não é um número perfeito!!`
         divisors.innerHTML =`Divisores de ${n} são ${divisores}`
      }else{
         isPerfect.innerHTML = `${n} é perfeito!`
       divisors.innerHTML = `Divisores de ${n} : ${divisores}`
      }
   }

}