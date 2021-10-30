const inputX = document.querySelector('.calculator__input-X')
const inputAction = document.querySelector('.calculator__input-action')
const inputY = document.querySelector('.calculator__input-Y')

function calc() {
   let inputXValue = parseInt(inputX.value)
   let inputActionValue = inputAction.value
   let inputYValue = parseInt(inputY.value)
   let result
   if (typeof (inputXValue) === Number || typeof (inputYValue) == Number || inputActionValue === '+' || inputActionValue === '-' || inputActionValue === '*' || inputActionValue === '/' || inputActionValue === '**' || inputActionValue === '%') {
      return result = eval(inputXValue + inputActionValue + inputYValue)
   } else {
      alert('Введите правельное значение')
      calcResetF()
   }

}

const calcResult = document.querySelector('.calculator__result')

const calcBtn = document.querySelector('.calculator__btn')
calcBtn.addEventListener('click', e => {
   calcResult.innerHTML = `<div class="calculator__result-solution">Решение: ${calc()}</div>`
})

const calcReset = document.querySelector('.calculator__reset')
calcReset.addEventListener('click', e => {
   calcResetF()
   if (calcResult.querySelector('.calculator__result-solution')) {
      calcResult.removeChild(calcResult.querySelector('.calculator__result-solution'))
   }

})

function calcResetF() {
   inputX.value = ''
   inputAction.value = ''
   inputY.value = ''

}

