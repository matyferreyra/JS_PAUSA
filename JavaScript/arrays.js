
//function mostrarProductosCeramica();

function mostrarProductosCeramica() {
    console.table(cosmetica);
}

agregarProducto();

function agregarProducto() {
    let setid = generarID(); //asignamos, por medio de la función, un número aleatorio único para definir el nuevo producto.
    let newProduct = prompt("Ingrese el nombre del producto:");
    let setprice = parseFloat(prompt("Ingrese el precio del nuevo producto:")).toFixed(2);
    cosmetica.push(new Cosmetica(setid, newProduct, setprice)); //agregamos un nuevo producto al array de objetos ya definido anteriormente por medio del constructor y las variables. En este caso "cosmetica" es el array al cual se le va a agregar un nuevo objeto en base al objeto constructor definido anteriormente llamado "Cosmetica". La diferencia en la denominación entre el array y el objeto constructor es la "C" mayúscula.
}

generarID() {
    return parseInt(Math.random() * 1000); //Esta función es para crear un número aleatorio a modo de identificador de c/u de los productos que cuyo resultado se invoca en la linea 22.
}

recorrerArray();

function recorrerArray() { //Esta iteración se hace por medio de un ciclo FOR..OF
    for (let producto of productos) { //de esta manera, con un FOR..OF, se recorre o lee el array productos, lee la variable que se está declarando (producto) y la guarda allí, y asi sucesivamente hasta recorrer el array completamente y acto seguido lo muestra al producto en cuestión en forma de tabla independiente por cada producto por medio del console.table.
        console.table(cosmetica);
    }
}

buscarProducto();

function buscarProducto() {
    let search = prompt("Ingrese el nombre del producto a buscar: ").toLowerCase();
    let resultado = productos.find((producto) => producto.nombre.includes(search)); //texto parcial
    if (resultado !== undefined) {;
        console.clear();
        console.table(resultado); //mostrar el resultado en pantalla
    }
}

function filtrarProductos()

filtrarProductos() {
    let filtro = prompt("Ingrese el nombre del producto a buscar: ").toLowerCase();
    let resultadofil = cosmetica.filter((cosmetica) => cosmetica.nombre.includes(filtro));
    if (resultadofil !== undefined) {;
        console.clear();
        console.table(resultadofil);
    }
}

eliminarProducto();

function eliminarProducto() {
    let supr = prompt(“Ingrese el nombre del producto e eliminar: ”).toLowerCase();
    let posicion = productos.indexOf(supr);
    let erased = productos.splice(posicion, 1);
    alert(“Se ha eliminado el elemento: “ + erased);
}