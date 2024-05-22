// obtendo form e local da resposta
const form = document.querySelector('form')
const respPromoProduto = document.getElementById('outPromocaoDoProduto')
const respDescoProduto = document.getElementById('outDescontoDoProduto')

form.addEventListener('submit', (e) =>{
    // usado para não recarregar a página
    e.preventDefault()

    // obtendo valores mandado pelo form
    const nomeProduto = form.inNomeProduto.value
    const valorProduto = form.inValorProduto.value

    // calculando da promoção
    const valorDosPrimeiros = valorProduto * 2
    const valorDesconto = valorProduto * 0.50
    const valorPromocional = valorDosPrimeiros + valorDesconto


    // mostrando valores no local da resposta
    respPromoProduto.textContent = `${nomeProduto} - Promoção: Leve 3 por R$: ${valorPromocional.toFixed(2)}`
    respDescoProduto.textContent = `O 3° produto custa apenas R$: ${valorDesconto.toFixed(2)}`

})