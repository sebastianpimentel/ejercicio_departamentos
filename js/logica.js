
let dep = document.getElementById("dep")

const capital = () => {
    let valor = prompt("Dime un Departamento o ingresa salir para terminar");

    while (valor !== "Amazonas" && valor !== "Antioquia" && valor !== "Arauca" && valor !== "Atlantico" && valor !== "Bolivar" && valor !== "Boyaca" && valor !== "Caldas" && valor !== "Caqueta" && valor !== "Casanare" && valor !== "Cauca" && valor !== "Cesar" && valor !== "Choco" && valor !== "Cordoba" && valor !== "Cundinamarca" && valor !== "Guainia" && valor !== "Guaviare" && valor !== "Huila"&& valor !== "Guajira" && valor !== "Magdalena" && valor !== "Meta" && valor !== "Nariño" && valor !== "Norte de santandder" && valor !== "Putumayo" && valor !== "Quindio" && valor !== "Risaralda" && valor !== "San andres y providencia" && valor !== "Santander" && valor !== "Sucre" && valor !== "Tolima" && valor !== "Valle del cauca" && valor !== "Vaupes" && valor !== "Vichada" && valor!=="salir") {
        valor = prompt("Dime un Departamento valido o ingresa salir para terminar");
    }

    if (valor === "Amazonas") {
        alert("su capital es leticia")
        window.location.href = "https://es.wikipedia.org/wiki/Amazonas_(Colombia)"
    }
    else if (valor === "Antioquia") {
        alert("su capital es Medellin")
        window.location = "https://es.wikipedia.org/wiki/Antioquia)"

    }
    else if (valor === "Arauca") {
        alert("su capital es Arauca")
        window.location = "https://es.wikipedia.org/wiki/Arauca_(Colombia)"
    }
    else if (valor === "Atlantico") {
        alert("su capital es Barraquilla")
        window.location = "https://es.wikipedia.org/wiki/Atl%C3%A1ntico_(Colombia)"
    }
    else if (valor === "Bolivar") {
        alert("su capital es Cartagena")
        window.location = "https://es.wikipedia.org/wiki/Bol%C3%ADvar_(Colombia)"
    }
    else if (valor === "Boyaca") {
        alert("su capital es Tunja")
        window.location = "https://es.wikipedia.org/wiki/Boyac%C3%A1"
    }
    else if (valor === "Caldas") {
        alert("su capital es Manizales")
        window.location = "https://es.wikipedia.org/wiki/Caldas"
    }
    else if (valor === "Caqueta") {
        alert("su capital es Florencia")
        window.location = "https://es.wikipedia.org/wiki/Caquet%C3%A1"
    }
    else if (valor === "Casanare") {
        alert("su capital es Yopal")
        window.location = "https://es.wikipedia.org/wiki/Casanare"
    }
    else if (valor === "Cauca") {
        alert("su capital es Popayan")
        window.location = "https://es.wikipedia.org/wiki/Cauca_(Colombia)"
    }
    else if (valor === "Cesar") {
        alert("su capital es Valledupar")
        window.location = "https://es.wikipedia.org/wiki/Cesar"
    }
    else if (valor === "Choco") {
        alert("su capital es Quibdo")
        window.location = "https://es.wikipedia.org/wiki/Choc%C3%B3"
    }
    else if (valor === "Cordoba") {
        alert("su capital es Monteria")
        window.location = "https://es.wikipedia.org/wiki/C%C3%B3rdoba_(Colombia)"
    }
    else if (valor === "Cundinamarca") {
        alert("su capital es Bogota")
        window.location = "https://es.wikipedia.org/wiki/Cundinamarca"
    }
    else if (valor === "Guainia") {
        alert("su capital es Inírida")
        window.location = "https://es.wikipedia.org/wiki/Guain%C3%ADa"
    }
    else if (valor === "Guaviare") {
        alert("su capital es San josé del guaviare")
        window.location = "https://es.wikipedia.org/wiki/Guaviare"
    }
    else if (valor === "Huila") {
        alert("su capital es Neiva")
        window.location = "https://es.wikipedia.org/wiki/Huila"
    }
    else if (valor === "Guajira") {
        alert("su capital es Riohacha")
        window.location = "https://es.wikipedia.org/wiki/La_Guajira"
    }
    else if (valor === "Magdalena") {
        alert("su capital es Santa marta")
        window.location = "https://es.wikipedia.org/wiki/Magdalena_(Colombia)"
    }
    else if (valor === "Meta") {
        alert("su capital es Villavicencio")
        window.location = "https://es.wikipedia.org/wiki/Meta_(Colombia)"
    }
    else if (valor === "Nariño") {
        alert("su capital es Pasto")
        window.location = "https://es.wikipedia.org/wiki/Nari%C3%B1o_(Colombia)"
    }
    else if (valor === "Norte de santander") {
        alert("su capital es Cúcuta")
        window.location = "https://es.wikipedia.org/wiki/Norte_de_Santander"
    }
    else if (valor === "Putumayo") {
        alert("su capital es Mocoa")
        window.location = "https://es.wikipedia.org/wiki/Putumayo_(Colombia)"
    }
    else if (valor === "Quindio") {
        alert("su capital es Armenia")
        window.location = "https://es.wikipedia.org/wiki/Quind%C3%ADo"
    }
    else if (valor === "Risaralda") {
        alert("su capital es Pereira")
        window.location = "https://es.wikipedia.org/wiki/Risaralda"
    }
    else if (valor === "San andres y providencia") {
        alert("su capital es San andrés")
        window.location = "https://es.wikipedia.org/wiki/Archipi%C3%A9lago_de_San_Andr%C3%A9s,_Providencia_y_Santa_Catalina"
    }
    else if (valor === "Santander") {
        alert("su capital es Bucaramanga")
        window.location = "https://es.wikipedia.org/wiki/Santander_(Colombia)"
    }
    else if (valor === "Sucre") {
        alert("su capital es Sincelejo")
        window.location = "https://es.wikipedia.org/wiki/Sucre_(Colombia)"
    }
    else if (valor === "Tolima") {
        alert("su capital es Ibague")
        window.location = "https://es.wikipedia.org/wiki/Tolima"
    }
    else if (valor === "Valle del cauca") {
        alert("su capital es Cali")
        window.location = "https://es.wikipedia.org/wiki/Valle_del_Cauca"
    }
    else if (valor === "Vaupes") {
        alert("su capital es Mitú")
        window.location = "https://es.wikipedia.org/wiki/Vaup%C3%A9s"
    }
    else if (valor === "Vichada") {
        alert("su capital es Puerto carreño")
        window.location = "https://es.wikipedia.org/wiki/Vichada"
    }
    if (valor === "salir"){
        return false;
    }
   
};

window.onclick = function () {
    capital();
}