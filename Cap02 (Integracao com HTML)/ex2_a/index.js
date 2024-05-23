// Obtendo o form e local de resposta
const form = document.querySelector('form')
const respNome = document.getElementById('outNomeMedicamento')
const respPromocao = document.getElementById('outPromocaoRemedio')

// adicionando um evento ao botao submit do form
form.addEventListener('submit', (e) =>{
    // Usado para não recarregar a página.
    e.preventDefault()

    // obtendo valores dos inputs
    const nomeProduto = form.inNomeMedicamento.value
    const valorProduto = form.inValorMedicamento.value

    // Calculando a promoção
    const valorPromocional = Math.floor(valorProduto * 2)

    // Mostrando valores nos locais de resposta
    respNome.textContent = `Promoção de ${nomeProduto}`
    respPromocao.textContent = `Leve 2 por R$ ${valorPromocional.toFixed(2)}`

})