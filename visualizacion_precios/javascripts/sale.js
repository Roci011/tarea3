let compras = [];
const productos = [
  {
    id: 1,
    name: "Mezcla Original 200g",
    price: 500,
  },
  {
    id: 2,
    name: "Mezcla Original 500g",
    price: 900,
  },
  {
    id: 3,
    name: "Mezcla Especial 200g",
    price: 700,
  },
  {
    id: 4,
    name: "Mezcla Especial 500g",
    price: 1200,
  }
];
function add() {
  const idproducto = parseInt(document.getElementById("product").value);
  const cantidad = parseInt(document.getElementById("number").value);
  const producto = productos.find(p => p.id === idproducto);
  function display(name, price, cantidad) {
    const message = `Producto: ${name}\nPrecio: ¥${price} Cantidad: ${cantidad}\nTotal: ¥${price * cantidad} `;
    alert(message);
  }
  if (producto) {
    compras.push({ ...producto, cantidad });
    display(producto.name, producto.price, cantidad);
  }
}
function calc() {
  let total = 0;
  compras.forEach(item => {
    total += item.price * item.cantidad;
  });
  let calculogastos = 0;
  if (total <= 2000) {
    calculogastos = 500;
  } else if (total <= 3000) {
    calculogastos = 250;
  }
  const totalgastos = total + calculogastos;
  let message = "\n";
  compras.forEach(item => {
    message += `Nombre del Producto: ${item.name} `;
    message += `Precio: ${item.price}\n`;
    message += `Cantidad: ${item.cantidad}`;
    message += "\n";
  });
  message += `Subtotal: ¥${total} `;
  message += `Gastos de envío: ¥${calculogastos}\n`;
  message += `Total: ¥${totalgastos}`;
  alert(message);
}