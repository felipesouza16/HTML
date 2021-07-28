var cor = false;
function mostrarnome(){
    console.log('Bem vindo, João');
}
mostrarnome();
function cliqueaqui(){
    alert('Parabéns, você sabe clicar!');
}
function soma(){
    var s1 = parseInt(document.getElementById('soma1').value);
    var s2 = parseInt(document.getElementById('soma2').value);
    s3 = s1+s2;
    console.log(`O valor da adição é ${s3}`)
}
function link(){
    let elemento = document.getElementById('div1')
    elemento.innerHTML ="<a href = > Link Aqui </a>"
}
function mudarcor(){
    cor = !cor
    let elemento = document.getElementById('div1')
    if(cor){
        elemento.style.backgroundColor="#006969"
    }
    else{
        elemento.style.backgroundColor="black"
    }
}
function borda(){
    let elemento = document.getElementById('div1')
    elemento.style.border="2px solid #f00"
}
