var words = ["dehqon", "xolam", "xayvon", "horoz", "zerikarli"];

var input = document.getElementById("input");
var p=document.getElementById("prgrph");

p.addEventListener('click', () => {
    input.value= p.innerHTML;
})

input.addEventListener('keyup', (e) => {
    var word = e.target.value;
    if(e.target.value=='') {
        p.innerHTML="";
    }
    for(var i = 0;i < words.length;i++) {
        if(word.length >= 3) {
            var part=words[i].slice(0,3);
            if(word.includes(part)) {
                p.innerHTML = words[i];
            }
        }
    }
    
})
