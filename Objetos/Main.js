class Producto {
constructor(nombre,precio,stock){
this.nombre=nombre;
this.precio=precio;
this.stock=stock;

}
restarStock(){
    this.stock--
}


}
let arroz= new Producto('Arroz',12,3)
arroz.restarStock();
console.log(arroz.stock)