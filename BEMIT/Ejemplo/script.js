// ABRIR Y CERRAR MODAL

const toggleModal = document.querySelectorAll('.js-toggle-modal');
const modal = document.querySelector('.js-modal');

const toggle_modal = () => {
	modal.classList.toggle('is-active');
};

toggleModal.forEach((button) => {
	button.addEventListener('click', toggle_modal);
});

// CAMBIO DE TEMA LIGHT Y DARK

const body = document.querySelector('.js-body');
const changeTheme = document.querySelectorAll('.js-change-theme');

function changeThemeAction () {
	const _theme = this.dataset.theme;
	console.log(_theme)

	body.className= "js-body";
	body.classList.add(_theme);
};

changeTheme.forEach( (button) => {
	button.addEventListener('click', changeThemeAction)
})