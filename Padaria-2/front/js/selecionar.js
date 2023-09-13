function selecionar() {
    var btnsSelecionar      = document.querySelectorAll(".btn-success");
    var arrayBtnsSelecionar = Array.from(btnsSelecionar);

    arrayBtnsSelecionar.forEach(btn => {
        btn.addEventListener('click', function () {
            var linha            = this.closest("tr");
            inputId.value        = linha.querySelector('.col-id').innerText;
            inputNome.value      = linha.querySelector('.col-nome').innerText;
            inputImg.value       = linha.querySelector('.col-img').innerText;
            inputDescricao.value = linha.querySelector('.col-descricao').innerText;
            inputPreco.value     = linha.querySelector('.col-preco').innerText;

            btnHidden();
            hidden = false;
        })
    })
}