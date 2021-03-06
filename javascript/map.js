function pegarLocalizacao(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(mostralocal);
    }
    else{
        alert('seu navegador não suporta esse recurso')
    }

    function mostralocal(posicao){
        var latitude = posicao.coords.latitude
        var longitude = posicao.coords.longitude
      

        
const zoom = 13
var mymap = L.map('mapid').setView([latitude, longitude], zoom);
var marker = L.marker([latitude, longitude]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVubmVyYXVndXN0byIsImEiOiJja242aGh2YnYwZTZsMm9sZ3Bpc252MGF4In0.G62Q3pEh1v6ZMzbb9hGn1g', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 19,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

marker.bindPopup("<b>Ola viajante</b><br>Vocês está aqui.").openPopup();        
    }
}

pegarLocalizacao()
