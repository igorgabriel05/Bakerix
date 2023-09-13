fetch("http://localhost:8080/", {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'GET'
})
    .then(resposta => resposta.json())
    .then(listaDeProdutos => listarProdutos(listaDeProdutos))
    .catch(console.error);

function listarProdutos(produtos){
    produtos.forEach(p => {
        var novaLinha     = document.createElement("tr");
        var colId         = document.createElement("td");
        var colNome       = document.createElement("td");
        var colImg        = document.createElement("td");
        var colDescricao  = document.createElement("td");
        var colPreco      = document.createElement("td");
        var colSelecionar = document.createElement("td");

        colId.classList.add('col-id');
        colId.innerText = p.id;

        colNome.classList.add('col-nome');
        colNome.innerText = p.nome;

        colImg.classList.add('col-img');
        colImg.innerText = p.img;

        colDescricao.classList.add('col-descricao');
        colDescricao.innerText = p.descricao;

        colPreco.classList.add('col-preco');
        colPreco.innerText = p.preco;

        colSelecionar.innerHTML = '<button class="btn btn-success">Selecionar</button>';

        novaLinha.appendChild(colId);
        novaLinha.appendChild(colNome);
        novaLinha.appendChild(colImg);
        novaLinha.appendChild(colDescricao);
        novaLinha.appendChild(colPreco);
        novaLinha.appendChild(colSelecionar);

        document.querySelector("tbody").appendChild(novaLinha);
    });
    selecionar();
}