const usuarioLS = localStorage.getItem('user')

const title = document.querySelector ('#titulo-user')

title.innerText = `Bienvenido/a: ${usuarioLS}`


const catalogo = JSON.parse( localStorage.getItem('catalogo') )
console.log (catalogo)

catalogo.forEach(element => {
    renderCard(element);
});
function renderCard(element){
    const divcont = document.querySelector('#productos-cont')
    const div = document.createElement('div')
    div.classList.add('producto')

    div.innerHTML = `<div>
                    <img src=${element.img}/>
                    <h4>${element.tipo}</h4>
                    <p>${element.desc}</p>
                    <p>Precio: $ ${element.precio}</p>
                    <p>Disponible: ${element.stock} en stock</p>
                    <button onclick="agregarAlCarrito(${element.id})" class="boton-agregar"><i class="fas fa-shopping-cart"> + </i></button>
                    </div>    
    `
    divcont.append(div)
}