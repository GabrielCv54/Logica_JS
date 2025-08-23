function assembleTip(){
    var f = (document.querySelector('input#fruit'));
    var fruit = (f.value);
    var tipText = document.querySelector('label#tip');

    if(fruit===''){
        alert('Informe a fruta, campos vazios não são permitidos!!')
        //fruit.focus()
    }

    var answer = fruit.charAt(0);
    var star = '*';
    var len = fruit.length;

    for(var i = 0; i<len ;i++){
        if(i===0){
            answer += (fruit.charAt(0));
           
        }else{
            answer += '_'
        }
         star += '*'.repeat(len);

    }
    tipText.textContent = answer;
    fruit.value = star;
}


var word = 'Lei de Murphy'
var len = word.length
var reverse = word.charAt(len-1) 

for(let i= len-2; i>=0 ;i--){
    reverse += word.charAt(i);
}

console.log(reverse)
