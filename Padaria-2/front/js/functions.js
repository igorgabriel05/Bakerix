function limparCampos(){
    inputId.value        = "";
    inputNome.value      = "";
    inputImg.value       = "";
    inputDescricao.value = "";
    inputPreco.value     = "";
};

function btnHidden() {
    if (hidden) {
        btnCadastrar.classList.toggle('visually-hidden');
        btnAlterar.classList.toggle('visually-hidden');
        btnRemover.classList.toggle('visually-hidden');
        btnCancelar.classList.toggle('visually-hidden');
        btnNavegar.classList.toggle('visually-hidden');
    }
};

btnCancelar.addEventListener('click', function(){
    limparCampos();
    hidden = true;
    btnHidden();
});

btnNavegar.addEventListener('click', function(){
    const url = "http://127.0.0.1:5500/front/index.html";

    window.location.href = url;
});

function alerta(){
    if(inputNome.value.trim() === ''){
        alert("O nome do produto é obrigatorio!!!")
        return true;
    }else if(inputImg.value.trim() === ''){
        alert("O caminho da imagem é obrigatorio!!!");
        return true;
    }else if(inputDescricao.value.trim() === ''){
        alert("A descrição do produto é obrigatoria!!!");
        return true;
    }else if(inputPreco.value.trim() === ''){
        alert("O preço é obrigatorio!!!");
        return true;
    }
}