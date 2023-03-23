const firstNumber = Number(prompt('Digite o primeiro número:'))
const secondNumber = Number(prompt('Digite o segundo número:'))

const sum = firstNumber + secondNumber
alert(`A soma dos dois números é: ${sum}`)

const subtraction = firstNumber - secondNumber
alert(`A subtração dos dois números é: ${subtraction}`)

const multiplication = firstNumber * secondNumber
alert(`A multiplicação dos dois números é: ${multiplication}`)

const division = (firstNumber / secondNumber).toFixed(2)
alert(`A divisão dos dois números é: ${division}`)

const module = firstNumber % secondNumber
alert(`O resto da divisão dos dois números é: ${module}`)

if (sum % 2 === 0) {
  alert(`A soma dos dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é ímpar: ${sum}`)
}

if (firstNumber === secondNumber) {
  alert('Os números inseridos são iguais.')
} else {
  alert('Os números inseridos são diferentes.')
}
