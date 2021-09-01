let range = document.querySelector('.range')

let hasproperty = document.getElementById('hasproperty')
let hasnotproperty = document.getElementById('hasnotproperty')

let bottompanel = document.querySelector('.calculation-body-checkboxes.bottom_panel')

hasproperty.addEventListener('click', (e) => {
	console.log('xyu')
	bottompanel.classList.add('open')
})

hasnotproperty.addEventListener('click', (e) => {
	console.log('xyu')
	bottompanel.classList.remove('open')
})
