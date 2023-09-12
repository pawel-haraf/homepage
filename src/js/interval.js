// zadanie WTF tydzień 11
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

setInterval(() => {
	const curentDate = new Date()
	console.log(curentDate.getHours())
	console.log(curentDate.getMinutes())
	if (curentDate.getHours() === curentDate.getMinutes()) {
		console.log('Urodziny minuty')
		jsConfetti.addConfetti()
	}
}, 60000)
