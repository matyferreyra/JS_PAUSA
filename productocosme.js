class Cosmetica{
    constructor (id, nombre, importe) {
        this.id = id
        this.nombre = nombre.toLowerCase();
        this.importe = parseFloat(importe).toFixed(2);
        this.disponible = true;
    }

    function vendido() {
        if (cantidad <=0) {
            disponible = false;
        }
    }
}