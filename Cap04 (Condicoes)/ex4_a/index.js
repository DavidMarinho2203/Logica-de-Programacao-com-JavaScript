// obtendo o form e local de resposta 
const form = document.querySelector('form'),
respResultado = document.getElementById('outResultado')

// adicionando um evento ao botao submit do form
form.addEventListener('submit', (e) =>{
    // usado para não recarregar a página
    e.preventDefault()

    // obtendo valores mandado pelo form
    const numero = Number(form.inNumero.value)

    // Mostrando valores no local de resposta.
    // Forma de if...else... padrão
        // if(numero % 2 == 0){
        //     respResultado.textContent = `${numero} é Par`
        // }else{
        //     respResultado.textContent = `${numero} é Ímpar`
        // }
    // Forma de if...else... ternário
        respResultado.textContent = numero % 2 == 0 ? `${numero} é Par`: `${numero} é Ímpar`
})