var button = document.querySelector('button');

function color(number){
   return Math.floor(Math.random() * (number + 1))
}


button.onmouseout = function(){
    var randomColor = 'rgb(' + color(255) + ',' + color(255) + ','+color(255) + ')';
    document.body.style.backgroundColor = randomColor;
};


var b = document.getElementById("button");

b.addEventListener('click',function(){
  var r = 'rgb(' + color(255) + ',' + color(255) + ',' + color(255) + ')';
  document.body.style.backgroundColor = r
})

console.log(r)