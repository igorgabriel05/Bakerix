btnRemover.addEventListener('click', function(){
    remover();
    setTimeout(() => {
        location.reload();
    }, 100);
});

function remover(){
    fetch("http://localhost:8080/" + inputId.value, {
        headers:{
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    })
}