var marcas = [
                {'id':1, 'nome':'Nike', 'desc':'Marca famosa','pais':'EUA'}
            ]
function salvar(){
    let id = parseInt(document.getElementById("id").value);
    let nome = (document.getElementById("nome").value);
    let desc = (document.getElementById("desc").value);
    let pais = (document.getElementById("pais").value);
    marca = {'id':id, 'nome':nome, 'desc':desc, 'pais':pais};
    marcas.push(marca);
    document.getElementById("id").value = '';
    document.getElementById("nome").value = '';
    document.getElementById("desc").value = '';
    document.getElementById("pais").value = '';
    mostrarlista();
}
function mostrarlista(){
    let tabela = document.getElementById('tabela-marcas');
    let corpo = tabela.getElementsByTagName('tbody')[0];
    corpo.innerHTML = "";
    marcas.forEach(m => {
        corpo.innerHTML += `<tr><td>${m['id']}</td> <td>${m['nome']}</td> <td>${m['desc']}</td> <td>${m['pais']}</td></tr>` 
    });
}
window.onload = function(){
    mostrarlista();
}