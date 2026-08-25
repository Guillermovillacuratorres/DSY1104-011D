console.log("Hola");

function guardar() {
    console.log("Hello");
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var direccion = document.getElementById("txtDireccion").value;
    var edad = document.getElementById("txtEdad").value;
    console.log(nombre);
    


    if (nombre == "" || nombre.length < 3) {
        alert("Error en el formato del nombre.");
    }else if(apellido == "" || apellido.length < 3){
        alert("Error en el formato del apellido.");
    }else if(edad <= 0 || edad > 120){
        alert("Error en la edad.")
    }else{
        document.getElementById("lblNombre").textContent = nombre;
        document.getElementById("lblApellido").textContent = apellido;
        document.getElementById("lblDireccion").textContent = direccion;
        document.getElementById("lblEdad").textContent = edad;
        guardar_storage(nombre);
    }


} 

const key_storage = "mi_primera_llave";

function guardar_storage(nombre) {

    //obtenemos lo que hay en el storage
    var storage = localStorage.getItem(key_storage);

    if (storage != null) {
        var storage_parse = JSON.parse(storage);
        usuario_nuevo = 
        {
            "nombre":nombre
        }

        
        console.log("USUARIO_NUEVO11: ", storage_parse);

        storage_parse.push(usuario_nuevo);

        console.log("USUARIO_NUEVO22: ", usuario_nuevo);


        localStorage.setItem(key_storage,JSON.stringify(storage_parse));
    }else{
        usuario_nuevo = [
            {
                "nombre":nombre
            }
        ]

        //localStorage.setItem(key_storage, JSON.stringify(usuario_nuevo));
    }

    var user = [
        {
            "nombre":nombre
        }
    ]
    console.log(user);   

   // localStorage.setItem(key_storage, JSON.stringify(user));

    var nombre_user = localStorage.getItem(key_storage);
    console.log(JSON.parse(nombre_user));
    
}




function cambioInput() {
    console.log("Estoy cambiando!!!!");
}



function mouseEvent() {
    alert("Mouse")
}