const digitsHTML = document.getElementsByClassName('digit')
const operHTML = document.getElementsByClassName('operation')

const clearBtnHTML = document.querySelector('.clear-btn')
const displayCurrentCalcHTML = document.querySelector('.current-calc')
const displayPreviousCalcHTML = document.querySelector('.previous-calc')
const resolveBtnHTML = document.querySelector('.resolve')

var currentCalc = ''

clearBtnHTML.addEventListener('click', ()=>{
	displayCurrentCalcHTML.innerHTML = ''
	currentCalc = ''
})
resolveBtnHTML.addEventListener('click', ()=>{
	displayCurrentCalcHTML.innerHTML = `${eval(currentCalc)}`
	displayPreviousCalcHTML.innerHTML = `(${displayCurrentCalcHTML.innerHTML})`
})

function disableResolve() {
	resolveBtnHTML.disabled = true
}

function enableResolve(params) {
	resolveBtnHTML.disabled = false
}

for (let i = 0; i < digitsHTML.length - 1; i++) {
	const digitElement = digitsHTML[i];
	digitElement.addEventListener('click', ()=>{
		currentCalc += `${digitElement.innerHTML}`
		displayCurrentCalcHTML.innerHTML = `${currentCalc}`
		enableResolve()
	})
}

for (let i = 0; i < operHTML.length; i++) {
	const operElement = operHTML[i];
	operElement.addEventListener('click', ()=>{
		currentCalc += `${operElement.innerHTML}`
		displayCurrentCalcHTML.innerHTML = `${currentCalc}`
		disableResolve()
	})
}