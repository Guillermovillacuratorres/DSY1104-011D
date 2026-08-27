console.log("hola");


var productos = [
    {
        "id":1,
        "titulo":"Teclado",
        "imagen":"img/teclado.webp",
        "precio":5000
    },
    {
        "id":2,
        "titulo":"GPU",
        "imagen":"img/gpu.webp",
        "precio":1500
    }
]


const section = document.getElementById("productos");
console.log(section);

const contenedorCards = document.createElement("div");
contenedorCards.className = "contenedor-cards";

section.appendChild(contenedorCards);

for (const i of productos) {
    const card = document.createElement("div");
    card.className = "card";
    contenedorCards.appendChild(card);

    const tituloProducto = document.createElement("h3");
    tituloProducto.textContent = i.titulo;
    card.appendChild(tituloProducto);

    const imagenProducto = document.createElement("img");
    imagenProducto.src = i.imagen;
    imagenProducto.className = "imagen-producto";
    card.appendChild(imagenProducto);

    const precioProducto = document.createElement("p");
    precioProducto.className = "precio-producto";
    precioProducto.textContent = "$ " + i.precio;
    card.appendChild(precioProducto);


    const contendorBoton = document.createElement("div");
    contendorBoton.className = "contenedor-boton";
    card.appendChild(contendorBoton);

    const botonAgregarCarro = document.createElement("button");
    botonAgregarCarro.textContent = "Agregar al carrito";
    botonAgregarCarro.className = "btn btn-primary";
    botonAgregarCarro.addEventListener("click", function(){
        guardar(i);
    })
    contendorBoton.appendChild(botonAgregarCarro);

}


const LLAVE = "carrito";


function guardar(producto) {
    var storageActual = localStorage.getItem(LLAVE);
    var lista = [];
    if (storageActual != null) {
        var storageParse = JSON.parse(storageActual);
        //lista.push(producto);
        //storageParse.push(lista);
        storageParse.push(producto);
        localStorage.setItem(LLAVE,JSON.stringify(storageParse));
        console.log("STORAGE", storageParse);
        
    }else{
        lista.push(producto);
        localStorage.setItem(LLAVE,JSON.stringify(lista));
    }
}