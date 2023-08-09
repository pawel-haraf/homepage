const hamburger = document.querySelector('.hamburger--js')

hamburger.addEventListener('click', () => {
	console.log('🍔')
	const navigation = document.querySelector('.navigation--js')
	navigation.classList.toggle('navigation--open')
})