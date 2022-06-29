let Frutas=["Manzana", '1', true]
/*console.log(Frutas)*/
Frutas.push("Naranja")
Frutas[4]="3"
Frutas[0]="Cereza"
/*let Lista=["Under pressure",    "Say it isn't so",   "Lago en el cielo"]
console.log("Canciones en la playlist: "+Lista)
console.log(Lista.length)*/
/*let Paises=["Argentina", "Brasil", "Peru"]
let Comida=["Asado", "Feijoada", "Ceviche"]
let Combinacion=[Paises,Comida]
console.log(Combinacion)
console.log("La comida "+Comida[0]+" corresponde a "+Paises[0])

Frutas.pop()
console.log(Frutas)
Frutas.unshift(1)
console.log(Frutas)
Frutas.shift()
console.log(Frutas)*/



/*let Estudiantes=["Alvaro", "Fernando", "Mariano", "Pedro", "Rodrigo"]
console.log(Estudiantes)
console.log(Estudiantes[4])
Estudiantes[2]="Marcos"
console.log(Estudiantes)
Estudiantes.push("Alberto")
alert("Se incorporo un nuevo estudiante"+Estudiantes[5]) 
console.log(Estudiantes)
Estudiantes.pop()
console.log(Estudiantes)
Estudiantes.unshift("Alberto")
console.log(Estudiantes)
Estudiantes.shift()
console.log(Estudiantes)*/


/*let Ingresantes2023=["Dario", "Francisco", "Marco"]
console.log(Ingresantes2023)
let nuevoAño= Estudiantes.concat(Ingresantes2023)
console.log(nuevoAño)
nuevoAño.sort()
console.log(nuevoAño)*/




let Carrito=["Atun", "Crema", "Fideos", "Papas", "Queso"]
let nuevoProducto= prompt("Ingrese el producto...")
if(Carrito.includes(nuevoProducto))
console.log("El producto ya se encuentra en el carrito:  "+Carrito)
else
Carrito.push(nuevoProducto)
console.log("El producto:  "+nuevoProducto+" se agrego al carrito...  "+ Carrito)




