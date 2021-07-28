var cor = false;
function mostrarnome(){
    console.log('Bem vindo, João');
}
mostrarnome();
function cliqueaqui(){
    alert('Parabéns, você sabe clicar!');
}
function soma(a,b){
    let adicao = a+b;
    console.log(`O valor da adição é ${adicao}`)
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