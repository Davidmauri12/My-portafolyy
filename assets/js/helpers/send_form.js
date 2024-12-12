const formDOM = document.querySelector('#contact-form');
const modalDOM = document.querySelector('#modal');
const closeButttonDOM = document.querySelector('#btn_close-modal');

function openModal() {
	modalDOM.style.display = 'block';
}

function closeModal() {
	modalDOM.style.display = 'none';
}

closeButttonDOM.addEventListener('click', closeModal);

function sendEmail() {
	formDOM.addEventListener('submit', (e) => {
		e.preventDefault();
		const params = {
			name: document.getElementById('name').value.trim(),
			email: document.getElementById('email').value.trim(),
			subject: document.getElementById('subject').value.trim(),
			message: document.getElementById('message').value.trim(),
		};

		if (!params.name || !params.email || !params.message || !params.subject) {
			alert('por favor, completa todos los campos antes de enviar el mensaje.');
			return;
		}
		emailjs.send('gmail', 'service_iyhxbbe', params).then(
			(response) => {
				console.log('SUCCESS!', response.status, response.text);
				openModal();
			},
			(error) => {
				console.error('FAILED...', error);
				alert('hubo un problema al enviar el mensaje. intenta nuevamente');
			},
		);
	});
}

export default sendEmail;
