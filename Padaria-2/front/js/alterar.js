btnAlterar.addEventListener('click', function(){
    if(!alerta()){
        alterar();
        setTimeout(() => {
            location.reload();
        }, 100);
    }
});

function alterar(){
    fetch("http://localhost:8080/", {
        headers:{
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            'id': inputId.value,
            'nome': inputNome.value,
            'img': inputImg.value,
            'descricao': inputDescricao.value,
            'preco': inputPreco.value
        })
    })
}