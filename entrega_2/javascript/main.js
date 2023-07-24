// Array para el carrito de compras
const carrito = [];

// Ordenar productos de menor a mayor
const ordenarMenorMayor = () => {
  productos.sort((a, b) => a.precio - b.precio);
  mostrarListaOrdenada();
};

// Ordenar productos de mayor a menor
const ordenarMayorMenor = () => {
  productos.sort((a, b) => b.precio - a.precio);
  mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
  const listaDeProductos = productos.map((producto) => {
    return "- " + producto.nombre + " $" + producto.precio;
  });
  alert("Lista de precios:" + "\n\n" + listaDeProductos.join("\n"));
  comprarProductos(listaDeProductos);
};

const comprarProductos = (listaDeProductos) => {
  let productoNombre = "";
  let productoCantidad = 0;
  let otroProducto = false;

  do {
    productoNombre = prompt(
      "¿Qué productos quieres comprar?" + "\n\n" + listaDeProductos.join("\n")
    );
    productoCantidad = parseInt(prompt("¿Cuántos quieres comprar?"));

    const producto = productos.find(
      (producto) =>
        producto.nombre.toLowerCase() === productoNombre.toLowerCase()
    );

    if (producto) {
      agregarAlCarrito(producto, producto.id, productoCantidad);
    } else {
      alert("¡Sorry! No queda stock de este producto.");
    }

    otroProducto = confirm("¿Quieres agregar otro producto?");
  } while (otroProducto);

  confirmarCompra();
};

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
  const productoRepetido = carrito.find(
    (producto) => producto.id === productoId
  );
  if (!productoRepetido) {
    producto.cantidad += productoCantidad;
    carrito.push(producto);
  } else {
    productoRepetido.cantidad += productoCantidad;
  }
};

const eliminarProductoCarrito = (nombreProductoAEliminar) => {
  carrito.forEach((producto, index) => {
    if (
      producto.nombre.toLowerCase() === nombreProductoAEliminar.toLowerCase()
    ) {
      if (producto.cantidad > 1) {
        producto.cantidad--;
      } else {
        carrito.splice(index, 1);
      }
    }
  });
  confirmarCompra();
};

const confirmarCompra = () => {
  const listaProductos = carrito.map((producto) => {
    return "- " + producto.nombre + " | Cantidad: " + producto.cantidad;
  });

  const isCheckout = confirm(
    "Checkout: " +
      "\n\n" +
      listaProductos.join("\n") +
      "\n\nCancela si quieres eliminar un producto del carrito."
  );

  if (isCheckout) {
    finalizarCompra(listaProductos);
  } else {
    const nombreProductoAEliminar = prompt(
      "Ingresa el nombre del producto a eliminar."
    );
    eliminarProductoCarrito(nombreProductoAEliminar);
  }
};

const finalizarCompra = (listaProductos) => {
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const precioTotal = carrito.reduce(
    (acc, item) => acc + item.cantidad * item.precio,
    0
  );
  alert(
    "Detalle de tu compra: " +
      "\n\n" +
      listaProductos.join("\n") +
      "\n\nTotal de productos: " +
      cantidadTotal +
      "\n\nEl total de tu compra es: " +
      precioTotal +
      "\n\n¡Gracias por tu compra! ¡Hasta pronto!"
  );
};

const comprar = () => {
  const productosBaratos = confirm(
    "¿Te gustaría ver la lista de productos ordenada por precio, del más barato al más costoso?"
  );

  if (productosBaratos) {
    ordenarMenorMayor();
  } else {
    ordenarMayorMenor();
  }
};

comprar();