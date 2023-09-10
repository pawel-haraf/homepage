// zadanie WTF tydzień 11
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

setInterval(() => {
	console.log('1 minuta')
	if (new Date().getHours().toLocaleString().slice(0, 10) === new Date().getMinutes().toLocaleString().slice(0, 10)) {
		console.log('Urodziny minuty')
		jsConfetti.addConfetti()
	}
}, 60000)
