function contador(){   
    var chinchila = Number.parseFloat(document.getElementById('chin').value);
    var year = Number.parseInt(document.getElementById('years').value);

let txt = ''  
for(let counter=1;counter<=year;counter++){

        if(counter == 1){
            txt+=`${counter}°Ano: `+(chinchila*counter) + " Chinchilas"+"<br>"
        }else{
            txt+= `${counter}°Ano: `+((chinchila*=3))+ " Chinchilas"+"<br>";
        }
        /*document.querySelector('p') = `${counter}°Ano: ${(chinchila*3)*counter}`*/
}
document.getElementById('p').innerHTML = txt;

}
