// == selectores ==

const productosContainer = document.querySelector('#contenedor-productos')

const carritoContenedor = document.querySelector('#carrito-contenedor')

const contadorCarrito = document.querySelector('#contadorCarrito')

const precioTotal = document.querySelector('#precioTotal')

const botonVaciar = document.getElementById('vaciarCarrito')

const carrito = []

// CARDS DE PRODUCTOS EN EL DOM
catalogo.forEach ( (producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')

    div.innerHTML = `
                    <img src=${producto.img}/>
                    <h4>${producto.tipo}</h4>
                    <p>${producto.desc}</p>
                    <p>Precio: $ ${producto.precio}</p>
                    <p>Disponible: ${producto.stock} en stock</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar"><i class="fas fa-shopping-cart"> + </i></button>
                    `

    productosContainer.append(div) //Hago que se vean esos div en contenedor-productos en el html
});

// AGREGAR LOS PRODUCTOS AL CARRITO
const agregarAlCarrito = (id) => {
    const item = catalogo.find( (producto) => producto.id === id)
    carrito.push(item)

    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}

// ELIMINAR LOS ITEMS DEL CARITO 1x1
const removerDelCarrito = (id) => {
    const item = carrito.find((producto) => producto.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    renderCarrito()
    renderCantidad()
    renderTotal()
}

// ELIMINAR TODOS LOS PRODUCTOS DE UNA VEZ
const vaciarCarrito = () => {
    carrito.length = 0

    renderCarrito()
    renderCantidad()
    renderTotal()
}

botonVaciar.addEventListener('click', vaciarCarrito)

// FUNCIONES
// COMO SE VERÁN LOS PRODUCTOS EN CARRITO
const renderCarrito = () => {
    carritoContenedor.innerHTML = '' // al llamar, vacío el contenedor para que no se acumulen los productos 

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                    <p>${producto.tipo}</p>
                    <p>Precio: $${producto.precio}</p>
                    <button onclick="removerDelCarrito(${producto.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `
        
        carritoContenedor.append(div)
    })
}

// NUMERITO DEL CARRITO
const renderCantidad = () => {
    contadorCarrito.innerText = carrito.length
}

// SUMA PRECIO DE LOS PRODUCTOS
const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio
    })

    precioTotal.innerText = total
}

// FIN FUNCIONES
