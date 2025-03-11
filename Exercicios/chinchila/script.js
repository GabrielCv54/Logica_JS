function contador(){   
    var chinchila = Number.parseFloat(document.getElementById('chin').value);
    var year = Number.parseInt(document.getElementById('years').value);

let txt = ''  
for(let counter=0;counter<year;counter++){
        txt+= "Ano: "+((chinchila*3)*counter)+ " Chinchilas"+"<br>";
        if(counter == 0){
            txt+="Ano: "+(chinchila*3) + " Chinchilas"+"<br>"
        }
        /*document.querySelector('p') = `${counter}°Ano: ${(chinchila*3)*counter}`*/
}
document.getElementById('p').innerHTML = txt;

}
