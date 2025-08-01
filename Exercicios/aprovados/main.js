const public_tender = []

function addContest(){
  var candidate = document.querySelector('input#cand').value;
  var hits = document.querySelector('input#hits').value;
  
  public_tender.push({'nome':candidate,'acertos':hits})

  window.alert(`Candidato(a) ${candidate} adicionado | Pontuação : ${hits}`)

}

function listAllContest(){
   var listing = document.querySelector('div#lista')
   var paragraph= ''

   
   public_tender.forEach(function(candidate)  {
   var p = document.createElement('p');
   paragraph.textContent =`Candidato : ${candidate.nome}` + `Pontos : ${candidate.acertos}`
   p.appendChild(paragraph)


   })
 
      listing.appendChild(p)

  }