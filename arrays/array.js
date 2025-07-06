/* const marks = ['Dove','Sony','Windows','Samsung','Nike','Adidas']

marks[0] = 'Bic'
/* for (let i=0;i<marks.length;i++){
console.log(marks[i])
} 

for(let pos in marks){
    console.log(`Na posição ${pos} tem o elemento ${marks[pos]}`)
}
console.log(marks.indexOf('Nike'))
 */


var patients = [];

function addPatient(){
   var paciente = document.getElementById('paciente').value;
   var lista = document.getElementById('list').value;
   
   if(paciente == ''){
    alert('Por favor , preencha o nome: ');
    paciente.focus();
    return
 }
 patients.push(paciente);

 var list = '';//concatenação dos pacientes

 // percorre o array
 for(i=0;i<patients.length;i++){
    list += (i+1) + '.' + patients[i] + '\n';
 }

 //muda o conteúdo da tag lista
 lista.textContent = list;

 //limpa campo e posiciona cursor em paciente
 paciente = '';
 paciente.focus();

}

var bttn = document.getElementById('btn');
bttn.addEventListener('click',addPatient)

