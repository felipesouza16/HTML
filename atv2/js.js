var cervas = [];
function divcadastro(){
    let request = new XMLHttpRequest;
    request.open('GET', 'cadastro.html')
    request.onload = function(){
        let response = this.responseText;
        let elemento = document.getElementById('divmain')
        console.log(this.responseText)
        elemento.innerHTML = response;
        salvar();
    }
    request.send();
}
function salvar(){
    let nome = document.getElementById('nome1');
    let valor = parseInt(document.getElementById('valor1'));
    let pais = document.getElementById('pais1');
    cerva = {'nome':nome, 'valor':valor, 'pais':pais};
    cervas.push(cerva);
    localStorage.setItem("cervas", JSON.stringify(cervas));
    document.getElementById("nome1").value = " ";
    document.getElementById("valor1").value = " ";
    document.getElementById("pais1").value = " ";
}
function carregarStorage(){
    let json = localStorage.getItem("cervas");
    if(json != null){
        cervas = JSON.parse(json);
    }
}
window.onload = function(){
  carregarStorage()
}
