function pegaHTML() {
    fetch("http://localhost:8080/", {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    })
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            console.log(data);
            listaProdutos(data);
        })
        .catch(error => {
            console.error("Ocorreu um erro:", error);
        });

}

pegaHTML();

function listaProdutos(padaria) {
    let divRow = document.createElement('div');

    padaria.forEach(padaria => {
        /* console.log(padaria.img); */
        let img = document.createElement('img');
        img.classList.add('img-produto')
        img.setAttribute('src', padaria.img);
        img.setAttribute('alt', padaria.nome);

        let divNome = document.createElement('div');
        divNome.classList.add('nome-produto');
        divNome.innerText = padaria.nome;

        let divDesc = document.createElement('div');
        divDesc.classList.add('descricao');
        divDesc.innerText = padaria.descricao;

        let divPreco = document.createElement('div');
        divPreco.classList.add('preco');
        divPreco.innerText = padaria.preco;

        let button = document.createElement('button');
        button.classList.add('btn', 'btn-success');
        button.innerText = 'Comprar >>>';

        let divCol = document.createElement('div');
        divCol.classList.add('col-3', 'produto');
        divCol.appendChild(img);
        divCol.appendChild(divNome);
        divCol.appendChild(divDesc);
        divCol.appendChild(divPreco);
        divCol.appendChild(button);

        divRow.classList.add('row');
        divRow.appendChild(divCol);
    });

    for (let i = 0; i < listaProdutos.length; i++) {

    }

    let divProdutos = document.getElementById('produtos');
    divProdutos.appendChild(divRow);
}

