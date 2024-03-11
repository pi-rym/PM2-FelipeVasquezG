
class CarritoCompra {
    constructor(){
        this.productos=[]; 
    }

    agregarProducto(producto){
        this.productos.push(producto);
    }

    calcularTotal(){
        let total=0;
       
        for (const producto of this.productos){
            total += producto.precio * producto.cantidad;
        }
        return total;
    }
    
    aplicarDescuento(descuento){
       const total = this.calcularTotal();
        const totalDescuento = total *(1 - descuento/100);
       
        return totalDescuento
    }
}



module.exports = CarritoCompra;