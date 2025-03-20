var pacientes=[];


function addPaciente(){
   var patient  = document.querySelector('#paciente').value;
   
   var lista = document.getElementById('lista');

    if(patient ==''){
        alert('Deve-Se digitar o nome do paciente para agendar.')
        console.log('Informe o nome por favor')
    }else{ 
    pacientes.push(patient)

    var list=''
    for(let i=0; i<pacientes.length ;i++){
       list+= (i+1)+'°' + pacientes[i] + '\n'
        }
     lista.textContent = list
  }
}
  //  button.addEventListener('click',addPaciente)



function Urgency(){
    var patient = document.querySelector('#paciente').value;
     

}