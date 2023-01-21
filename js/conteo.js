var ptj = 0;
var good = 20; //1
var bad = 1.125; //-1
var questions = []; //0 = blank
//btns
var btnGood, btnBad, btnBlank, btnBack;
//lists
var ul1;
//td
var ptjTd, goodTd, badTd, blankTd, totalTd;
document.addEventListener("load", ready, true);
function ready() {
    //btns
    btnGood = document.getElementById("btn-good");
    btnBad = document.getElementById("btn-bad");
    btnBlank = document.getElementById("btn-blank");
    btnBack = document.getElementById("btn-back");
    //lists
    ul1 = document.getElementById("ul1");
    //td
    ptjTd = document.getElementById("ptj");
    goodTd = document.getElementById("good");
    badTd = document.getElementById("bad");
    blankTd = document.getElementById("blank");
    totalTd = document.getElementById("total");
    //events
    btnGood.addEventListener("click", goodFun, true);
    btnBad.addEventListener("click", badFun, true);
    btnBlank.addEventListener("click", blankFun, true);
    btnBack.addEventListener("click", backFun, true);
    
}
function goodFun() {
    ptj+=good;
    ptjTd.textContent = ptj;
    goodTd.textContent=parseInt(goodTd.textContent)+1;
    totalTd.textContent=parseInt(totalTd.textContent)+1;
    questions.push(1);
    appendLi(1);
}
function badFun() {
    ptj-=bad;
    ptjTd.textContent = ptj;
    badTd.textContent=parseInt(badTd.textContent)+1;
    totalTd.textContent=parseInt(totalTd.textContent)+1;
    questions.push(-1);
    appendLi(-1);
}
function blankFun() {
    blankTd.textContent=parseInt(blankTd.textContent)+1;
    totalTd.textContent=parseInt(totalTd.textContent)+1;
    questions.push(0);
    appendLi(0);
}
function backFun() {
    if (questions.length!=0) {        
        let last = questions[questions.length-1];
        questions.pop();
        switch (last) {
            case 1: 
                ptj-=good;
                goodTd.textContent=parseInt(goodTd.textContent)-1;            
                break;
            case 0: 
                blankTd.textContent=parseInt(blankTd.textContent)-1;
                break;
            case -1: 
                ptj+=bad;
                badTd.textContent=parseInt(badTd.textContent)-1;
                break;
        }
        ptjTd.textContent = ptj;
        totalTd.textContent=parseInt(totalTd.textContent)-1;
        ul1.lastChild.remove();
    }
}
function appendLi(type) {
    let node = document.createElement("li");
    node.textContent = questions.length;
    node.textContent += ". ";
    switch (type) {
        case 1: 
            node.textContent += "Buena"; 
            node.className="text-success"; 
            break;
        case 0: node.textContent += "Blanco"; break;
        case -1: 
            node.textContent += "Mala";
            node.className="text-danger"; 
            break;
    }
    ul1.appendChild(node);
}