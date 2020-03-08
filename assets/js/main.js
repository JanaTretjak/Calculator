let ergebnis = document.getElementById("ergebnis")

function numer(Num){
    if (ergebnis.innerHTML == "0"){
        ergebnis.innerHTML = Num
    } else ergebnis.innerHTML += Num
}
function Reset(){
    ergebnis.innerHTML = 0 
}

function delet(){
    if (ergebnis.innerHTML.length == 1){
        ergebnis.innerHTML = 0
    } else ergebnis.innerHTML = ergebnis.innerHTML.substr(0, ergebnis.innerHTML.length-1)
}
function punkt(Pk){
    if(ergebnis.innerHTML.slice(-1)=="."){
        ergebnis.innerHTML += ""
    } else ergebnis.innerHTML += Pk
}


function operation(Op){
    if (ergebnis.innerHTML == "0" || ergebnis.innerHTML == ""){
        ergebnis.innerHTML = ""
    } else if(ergebnis.innerHTML.slice(-1)==Op){
        ergebnis.innerHTML += ""
    } else ergebnis.innerHTML += Op
}

function equally(){
    ergebnis.innerHTML = eval(ergebnis.innerHTML)
}

