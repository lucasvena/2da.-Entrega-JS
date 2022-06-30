const usuarioLS = localStorage.getItem('user')

const title = document.querySelector ('#titulo-user')

title.innerText = `Bienvenido/a: ${usuarioLS}`


const catalogo = JSON.parse( localStorage.getItem('catalogo') )
console.log (catalogo)
// const catalogo = JSON.parse (catalogoJSON)

// console.log (catalogoJSON)
// console.log (catalogo)

document.querySelector ('#producto-card').innerHTML = `
                                                    <h4>${catalogo.tipo}</h4>
                                                    <p>${catalogo.desc}</p>
                                                
`