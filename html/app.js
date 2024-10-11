document.addEventListener('DOMContentLoaded', function () {
	var map = L.map('map').setView([55.505, -0.09], 13);

	L.titleLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	var marker = L.marker([51.505, -0.09]).addTo(map);
	marker.bindPopup("Olá, sou um marcador!").openPopup();
})