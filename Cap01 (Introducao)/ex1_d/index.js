// Obtendo os valores
const nota1 = Number(prompt('1° Nota: '))
const nota2 = Number(prompt('2° Nota: '))
// Calculando a média
const media = ((nota1 + nota2) / 2).toFixed(1)
// Mostrando valores
alert(`1° Nota: ${nota1}
2° Nota: ${nota2}
Média: ${media}`)