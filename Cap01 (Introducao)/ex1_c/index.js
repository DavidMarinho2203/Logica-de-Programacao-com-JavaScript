// Obter o valor
const valor = Number(prompt('Preço do produto R$: '))
// Calculando valor (à vista e parcelado 3x)
const aVista = (valor - (valor * 0.10)).toFixed(2)
const parcelado = (valor / 3).toFixed(2)
// Mostrando valores na tela.
alert(`Preço do produto R$: ${valor}
À Vista: ${aVista}
Ou 3x de R$: ${parcelado}`)