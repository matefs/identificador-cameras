

// Cria uma instância do mapa usando Leaflet
var map = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);


L.marker([-23.3433256, -46.1538645]).addTo(map)
  .bindPopup('Aqui existe uma câmera.')
  .openPopup();

// funcao cadastrar nova camera
function cadastrarNovaCamera() {

  const valorLatitude = document.querySelector('#inputLatitude').value;

  const valorLongitude = document.querySelector('#inputLongitude').value;

  valorLatitude.length > 3 && valorLongitude.length > 3 ?
    L.marker([valorLatitude, valorLongitude]).addTo(map)
      .bindPopup('Aqui existe uma câmera.')
      .openPopup() : alert('Valores inválidos')


}

// limitador de números dos campos input

window.addEventListener('DOMContentLoaded', function() {

  const inputLatitude = document.querySelector('#inputLatitude');

  inputLatitude.addEventListener('input', function() {
    this.value.length > 5 ?
      this.value = this.value.slice(0, 20) : null
  })

  const inputLongitude = document.querySelector('#inputLongitude');

  inputLongitude.addEventListener('input', function() {
    this.value.length > 5 ?
      this.value = this.value.slice(0, 20) : null
  })



}); // fim listener