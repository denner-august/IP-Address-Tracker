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
        console.log(navigator.permissions)

        
const zoom = 13
var mymap = L.map('mapid').setView([latitude, longitude], zoom);
var marker = L.marker([latitude, longitude]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVubmVyYXVndXN0byIsImEiOiJja2tsczlobWMwbm1pMm9wZHRkc2RuNmRnIn0.Y0QdW53Hr6jmw9bHF26Cew', {
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

var cep = document.getElementById("cep")
document.getElementById('button').onclick = ()=>{
    fetch(`https://ws.apicep.com/cep/${cep.value}.json`).then
    (Response => {return Response.json()}).then(json => 
    {   document.getElementById('informe-distrito').innerText = json.district
        document.getElementById('informa-cidade').innerText = json.address
        document.getElementById('estado').innerText = json.city
        }
        );
};

pegarLocalizacao()