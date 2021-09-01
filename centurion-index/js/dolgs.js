let start_btn = document.querySelector('.dolgs-start')

const speed = 600;

let block_consult = document.querySelector('.dolgs-list__item.consult');
let block_podgotovka = document.querySelector('.dolgs-list__item.podgotovka');
let block_zayavl = document.querySelector('.dolgs-list__item.zayavl');
let block_zasedanie = document.querySelector('.dolgs-list__item.zasedanie');
let block_reshenie = document.querySelector('.dolgs-list__item.reshenie');
let block_finish = document.querySelector('.dolgs-list__item.finish');

let block_list = document.querySelectorAll('.dolgs-list__item')


start_btn.addEventListener('click', (e) => {
	startAnimate(speed)
})

function startAnimate(speed) {
	block_list.forEach((item) => {
		item.style.transitionDuration = `${speed}ms`
	})
	setTimeout( ()=> {
		block_consult.classList.add('loaded')
	}, speed * 0)

	setTimeout( ()=> {
		block_podgotovka.classList.add('loaded')

	}, speed * 1)

	setTimeout( ()=> {
		block_zayavl.classList.add('loaded')

	}, speed * 2)

	setTimeout( ()=> {
		block_zasedanie.classList.add('loaded')
		console.log(window.screen.width)
	}, speed * (window.screen.width > 1280 ? 4 : 3))

	setTimeout( ()=> {
		block_reshenie.classList.add('loaded')

	}, speed * 5)

	setTimeout( ()=> {
		block_finish.classList.add('loaded')

	}, speed * 6)
}



// var callback = function(entries, observer) {
//     startAnimate(speed)
//     console.log('norm')
// };

var observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if ( entry.intersectionRatio > 0 ) {
			startAnimate(speed)
			observer.disconnect()
		}
	})
	
}, {});

var target = document.querySelector('.dolgs');
observer.observe(target);