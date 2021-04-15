
const toggleModal = document.querySelectorAll('.js-toggle-modal')
const modal = document.querySelector('.js-modal');

const toggle_modal = () => {
	modal.classList.toggle('is-active');
}

toggleModal.forEach( button => {
	button.addEventListener('click', toggle_modal)
})
