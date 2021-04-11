var cep = document.getElementById("cep")
document.getElementById('button').onclick = ()=>{
    fetch(`https://ws.apicep.com/cep/${cep.value}.json`).then
    (Response => {return Response.json()}).then(json => 
    {   document.getElementById('informe-distrito').innerText = json.district
        document.getElementById('informa-cidade').innerText = json.address
        document.getElementById('estado').innerText = json.city
        }
        );
      window.localStorage.setItem("cep", cep.value)
};

if(localStorage.cep){
    cep.value = localStorage.cep
}