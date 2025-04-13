const productos = [
  {
    id: 1,
    nombre: "Blue Hoddie",
    categoria: "Hoddie",
    precio: 80.0,
    imagen: "./images/women/women_product_1.jpg",
  },
  {
    id: 2,
    nombre: "Black Suit",
    categoria: "Suits",
    precio: 120.0,
    imagen: "./images/women/women_product_2.jpg",
  },
  {
    id: 3,
    nombre: "Blue Jeans",
    categoria: "Jeans",
    precio: 200.0,
    imagen: "./images/women/women_product_3.jpg",
  },
  {
    id: 4,
    nombre: "Black T-shirts",
    categoria: "T-shirts",
    precio: 50.0,
    imagen: "./images/women/women_product_4.jpg",
  },
  {
    id: 5,
    nombre: "Black Sweaters",
    categoria: "Sweaters",
    precio: 350.0,
    imagen: "./images/women/women_product_5.jpg",
  },
  {
    id: 6,
    nombre: "Black Dress",
    categoria: "Dress",
    precio: 200.0,
    imagen: "./images/women/women_product_6.jpg",
  },
];

function imprimoProductosHTML(productos)
{
    const contenedor = document.getElementById("cards-container")

    for(const producto of productos)
    {
      const card = document.createElement("div")
      card.classList.add("card")

      card.innerHTML = `<img src="${producto.imagen}" alt= "${producto.nombre} class="producto-img"</>
        <p>${producto.categoria}</p>
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button id="btn-${producto.id}" class="btn-comprar">Add to cart</button>`;

      contenedor.appendChild(card)

      const boton = document.getElementById(`btn-${producto.id}`)
      boton.addEventListener("click", () => agregaAlCarrito(producto))
    }
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregaAlCarrito(producto)
{
  const productoEnCarrito = carrito.find( productoABuscar => productoABuscar.id === producto.id)

  if(productoEnCarrito)
    productoEnCarrito.cantidad++
  else 
  {
    let productoNuevo = 
    {
      id:producto.id,
      nombre: producto.nombre,
      categoria: producto.categoria,
      precio:producto.precio,
      imagen: producto.imagen,
      cantidad:1
    }
    carrito.push(productoNuevo)
  }
    
  localStorage.setItem("carrito",JSON.stringify(carrito))
  actualizoContadorCarrito();
}

function actualizoContadorCarrito()
{
  const contador = document.getElementById("carrito-contador");
  let total = 0

  for(const producto of carrito)
    total+=producto.cantidad
    
  contador.innerText = total
}

imprimoProductosHTML(productos)
actualizoContadorCarrito();