console.log("hola");


var productos = [
    {
        "titulo":"Teclado",
        "imagen":"img/teclado.webp",
        "precio":5000
    },
    {
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
    contendorBoton.appendChild(botonAgregarCarro);

}

