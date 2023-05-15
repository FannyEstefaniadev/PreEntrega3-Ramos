const productos = [
  {
    imgSrc: "img2moda/moda1.jpg",
    productoNombre: "Producto 1",
    productoDescripcion: "Descripción del producto 1",
    productoPrecio: 2500,
    id: 1,
  },
  {
    imgSrc: "img2moda/moda2.jpg",
    productoNombre: "Producto 2",
    productoDescripcion: "Descripción del producto 2",
    productoPrecio: 2300,
    id: 2,
  },
  {
    imgSrc: "img2moda/moda3.jpg",
    productoNombre: "Producto 3",
    productoDescripcion: "Descripción del producto 3",
    productoPrecio: 2400,
    id: 3,
  },
  {
    imgSrc: "img2moda/moda4.jpg",
    productoNombre: "Producto 4",
    productoDescripcion: "Descripción del producto 4",
    productoPrecio: 2790,
    id: 4,
  },
  {
    imgSrc: "img2moda/moda5.jpeg",
    productoNombre: "Producto 5",
    productoDescripcion: "Descripción del producto 5",
    productoPrecio: 2620,
    id: 5,
  },
  {
    imgSrc: "img2moda/moda6.jpg",
    productoNombre: "Producto 6",
    productoDescripcion: "Descripción del producto 6",
    productoPrecio: 2070,
    id: 6,
  },
  {
    imgSrc: "img2moda/moda7.jpg",
    productoNombre: "Producto 7",
    productoDescripcion: "Descripción del producto 7",
    productoPrecio: 2129,
    id: 7,
  },
  {
    imgSrc: "img2moda/moda8.webp",
    productoNombre: "Producto 8",
    productoDescripcion: "Descripción del producto 8",
    productoPrecio: 2460,
      id:8,
  },
  {
    imgSrc: "img2moda/moda9.jpg",
    productoNombre: "Producto 9",
    productoDescripcion: "Descripción del producto 9",
    productoPrecio: 2209,
  id: 9,
  },
  {
    imgSrc: "img2moda/moda10.jpg",
    productoNombre: "Producto 9",
    productoDescripcion: "Descripción del producto 9",
    productoPrecio: 2080,
  id: 9,
  },
  {
    imgSrc: "img2moda/moda11.jpeg",
    productoNombre: "Producto 9",
    productoDescripcion: "Descripción del producto 9",
    productoPrecio: 2600,
  id: 9,
  },
  {
    imgSrc: "img2moda/moda12.jpg",
    productoNombre: "Producto 10",
    productoDescripcion: "Descripción del producto 10",
    productoPrecio: 2500,
    id: 10,
  }
];

const container = document.createElement("div");
container.classList.add("pro-conteiner");
const contenedorProducto = document.querySelector(".contenedor-producto");

productos.forEach(producto => {
  const product = document.createElement("div");
  product.classList.add("pro");

  const img = document.createElement("img");
  img.classList.add("img");
  img.setAttribute("src", producto.imgSrc);
  img.setAttribute("alt", "foto-producto");

  const description = document.createElement("div");
  description.classList.add("des");

  const spanDescripcion = document.createElement("span");
  spanDescripcion.textContent = producto.productoDescripcion;

  const h5 = document.createElement("h5");
  h5.textContent = producto.productoNombre;

  const h4 = document.createElement("h4");
  h4.textContent = producto.productoPrecio;

  description.appendChild(spanDescripcion);
  description.appendChild(h5);
  description.appendChild(h4);

  const button = document.createElement("button");
  button.classList.add("producto");
  button.setAttribute("id", "precio");
  button.textContent = "Comprar";
  button.addEventListener("click", function() {
    carrito.agregarPrecio(producto);
  });

  product.appendChild(img);
  product.appendChild(description);
  product.appendChild(button);

  container.appendChild(product);
});

contenedorProducto.appendChild(container);



const carritoElemento = document.getElementById("carrito");
const precioElemento = carritoElemento.querySelector("p");
const comprarBoton = carritoElemento.querySelector("#comprar");

class CarritoDeCompras {
  constructor() {
    this.precios = [];
    this.precioTotal = 0;
  }

  agregarPrecio(producto) {
    console.log(producto);
    this.precioTotal += producto.productoPrecio;
    this.mostrarPrecio();
  }

  mostrarPrecio() {
    precioElemento.textContent = "Precio total: $" + this.precioTotal;
  }
}

const carrito =new CarritoDeCompras();

  

comprarBoton.addEventListener("click", function() {
  Swal.fire({
    title: 'Compra confirmada',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(https://sweetalert2.github.io/#downloadimages/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://sweetalert2.github.io/#downloadimages/nyan-cat.gif")
      left top
      no-repeat
    `
  })
});

