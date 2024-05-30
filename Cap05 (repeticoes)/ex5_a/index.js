// Obtendo o form e o local de resposta
const form = document.querySelector('form'),
respFrutas = document.getElementById('outRespFrutas')

// adicionando evento ao submit do form
form.addEventListener('submit', (e) =>{
    // usado para não recarregar a página
    e.preventDefault()

    // obtendo valores mandado pelo form
    const fruta = form.inFruta.value,
    numero = form.inNumero.value

    // repetindo a quantidade de nomes com a quantidade de numeros
    let frutas = ""
    for (let i = 0; i < (numero - 1); i++) {
        frutas += `${fruta} * `
    }
    // esse será usado para o útlimo, pois não terá o "*".
    frutas += fruta

    // mostrando valores no local de resposta
    respFrutas.textContent = frutas
})