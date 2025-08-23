const public_tender = []
const approved_candidates = [] // isso é usado na terceira função que mostra quais candidatos foram aprovados

function addContest(){
  var candidate = document.querySelector('input#cand').value;
  var hits = document.querySelector('input#hits').value;
  
  public_tender.push({'nome':candidate,'acertos':hits})

  window.alert(`Candidato(a) ${candidate} adicionado | Pontuação : ${hits}`)

}

function listAllContest(){
   var listing = document.querySelector('div#lista')
   listing.textContent = ''
  public_tender.sort()

   if(public_tender.length === 0){
   alert('Não há nada na lista ainda!!!')
   }else{
   
   public_tender.forEach((cand) =>  {
   var p = document.createElement('p');
   p.textContent =`Candidato(a) : ${cand.nome}` + ' | '+ ` Pontos : ${cand.acertos}`
   listing.appendChild(p)


   })
   }
   //listing.appendChild(p)

  }


function approved(){
  var appr = document.getElementById('aprovacao');
  //var points = public_tender.acertos
  appr.textContent =''

  if(public_tender.length === 0){
   alert('Não é possível realizar essa operação. Pois nenhum candidato(a) foi adicionado(a) ainda!')
  }else{

     var approved = Number.parseInt(window.prompt('Número de acertos para aprovação?: '))}

  for(cand of public_tender){
  if(cand.acertos >= approved){
    var p = document.createElement('p') ; 
    //approved_candidates.push(public_tender);
    p.textContent =  `${cand.nome}` + '-' + ` ${cand.acertos} acertos`
    appr.appendChild(p);


    }/* else{
      throw 'Candidato não atingiu a expectativa!!'
    } */
    

  }
}

var button = document.querySelector('input#aprovado')
button.addEventListener('click',approved)

