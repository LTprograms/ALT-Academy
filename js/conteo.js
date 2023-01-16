var questions = []
var good = 20;
var bad = 1.125;
function ready() {
    let btnGood = document.getElementById("btn-good");
    let btnBad = document.getElementById("btn-bad");
    let btnBack = document.getElementById("btn-back");
    btnGood.addEventListener("click", goodFun, true);
    btnBad.addEventListener("click", badFun, true);
    btnBack.addEventListener("click", backFun, true);
}
function goodFun() {
    if (questions.length<100) {        
        questions.push(true);
        update();
    }
}
function badFun() {
    if (questions.length<100) {        
        questions.push(false);
        update();
    }
}
function backFun() {
    if (questions.length<=100) {        
        questions.pop();
        update();
    }    
}
function reset(ptj, g, b, t) {
    ptj.textContent = 0;
    g.textContent = 0;
    b.textContent = 0;
    t.textContent = 0;
}
function update() {
    let ptj = document.getElementById("ptj");
    let goodSpan = document.getElementById("good");
    let badSpan = document.getElementById("bad");
    let total = document.getElementById("total");
    let g = 0;
    let b = 0;
         
    reset(ptj, goodSpan, badSpan, total);
    for (let i = 0; i < questions.length; i++) {        
        if (questions[i]) {
            goodSpan.textContent = parseInt(goodSpan.textContent) + 1;
            g++;
        }else{
            badSpan.textContent = parseInt(badSpan.textContent) + 1;
            b++;
        }
        total.textContent = parseInt(total.textContent) + 1;
    }
    ptj.textContent = g*good - b*bad;
    
}
document.addEventListener("load", ready, true);