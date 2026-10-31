const breedSelect = document.querySelector('#breed-select');

// Fetch the list of dog breeds from the Dog CEO API.

async function fetchBreeds() {
	const response = await fetch('https://dog.ceo/api/breeds/list/all');
	const data = await response.json();
	const breeds = Object.keys(data.message);

	// Add each breed to the select menu.
	breeds.forEach((breed) => {
		const option = document.createElement('option');
		option.value = breed;
		option.textContent = breed;
		breedSelect.appendChild(option);
	});
}

fetchBreeds();
const gallery = document.querySelector('#gallery');

// Fetch and display a random image when a breed is selected.
breedSelect.addEventListener('change', async () => {
	const breed = breedSelect.value;

	if (breed === '') {
		gallery.innerHTML = '';
		return;
	}

	const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/9`);
	const data = await response.json();
	gallery.innerHTML = data.message.map((image) => `
		<div class="gallery-item">
			<img src="${image}" alt="A ${breed} dog">
		</div>
	`).join('');
});
