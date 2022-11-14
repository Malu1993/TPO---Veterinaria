const apipurl = "https://api.mercadolibre.com/categories/MLA1072#options"

async function apiperro(){
    const response = await fetch(apipurl)
    const data = await response.json()
    console.log(data)
    
    let perro = document.createElement("img")
    let imgperro = data.picture
    perro.setAttribute("src", imgperro)
    let divisionp = document.getElementById("perro")
    divisionp.appendChild(perro)
}   

apiperro()


const apigurl = "https://api.mercadolibre.com/categories/MLA1081#json"

async function apigato(){
    const response = await fetch(apigurl)
    const data = await response.json()
    console.log(data)    
    
    let gato = document.createElement("img")
    let imggato = data.picture
    gato.setAttribute("src", imggato)
    let divisiong = document.getElementById("gato")
    divisiong.appendChild(gato)
    
}
 
 apigato()


