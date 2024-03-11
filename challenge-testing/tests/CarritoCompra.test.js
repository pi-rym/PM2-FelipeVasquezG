
const CarritoCompra = require("../index");


it('deberia ser siempre true', () =>{
    expect(true).toBe(true)
});
 
/*
// constructor(): Inicializa el carrito como un array vacío.

//carritoCompr  a debe ser clase

//CarritoCompra deebe ser una instacia de la clase carriotoCompra

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

el metodo agregarProducto deberia poder agragar a la lista un producto

*/
    

describe ('Clase carritoCompra', ()=> {
    let carritoCompra;

    beforeEach ( ()=> {
        carritoCompra = new CarritoCompra()
    })

describe ('sobre el constructor de la clase carritoCompra', () =>{
        test('CarritoCompra deberia ser una clase', ()=> {
            expect(typeof CarritoCompra.prototype.constructor).toBe('function')
        
        });

    it('carritoCompra deberia ser una instancia de la clase CarritoCompras', ()=> {
        expect (carritoCompra instanceof CarritoCompra).toBe(true)
    });

    it ('gregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito ', () =>{
        carritoCompra.agregarProducto ({producto:'casco', cantidad:2, precio:100});
        expect(carritoCompra.productos.length).toBe(1);
    });

    it('calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito',()=>{
        carritoCompra.agregarProducto ({producto:'casco', cantidad:2, precio:100});
        carritoCompra.agregarProducto ({producto:'guantes', cantidad:1, precio:50});
        carritoCompra.agregarProducto ({producto:'llanta', cantidad:2, precio:200});
        expect(carritoCompra.calcularTotal()).toBe(650);
    })

    it('aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado', ()=>{
        carritoCompra.agregarProducto ({producto:'casco', cantidad:2, precio:100});
        carritoCompra.agregarProducto ({producto:'guantes', cantidad:1, precio:50});
        carritoCompra.agregarProducto ({producto:'llanta', cantidad:2, precio:200});
        expect(carritoCompra.aplicarDescuento(10)).toBe(585);
    });

});



});