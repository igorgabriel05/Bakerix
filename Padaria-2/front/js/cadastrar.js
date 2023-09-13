btnCadastrar.addEventListener('click', function(){
    if(!alerta()){
        cadastrar();
        setTimeout(() => {
            location.reload();
        }, 100);
    }
});

function cadastrar(){
    fetch("http://localhost:8080/", {
        headers:{
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            'nome': inputNome.value,
            'img': inputImg.value,
            'descricao': inputDescricao.value,
            'preco': inputPreco.value
        })
    })
}