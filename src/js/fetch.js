// WTF 11.05
const username = 'pawel-haraf'
const username1 = 'makiekwtfowicz'
const username2 = 'maciejkorsan'
const direction = 'desc'
const repositoriesContainer = document.querySelector('.repositories--js')

fetch(`https://api.github.com/users/${username}/repos?direction=${direction}`)
	.then(response => response.json())
	.then(response => {
		for (let repository of response) {
			const { name, html_url } = repository
			const element = `<li><a href="${html_url}">${name}</a></li>`
			repositoriesContainer.insertAdjacentHTML('beforeend', element)
		}
	})
	.catch(e => console.log(e))
