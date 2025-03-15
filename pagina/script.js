const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click',comprarelemento);
    carrito.addEventListener('click',eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarritoBtn);
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classlist.constains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
    insertarCarrito(infoElemento);
}

function leerDatosElemento(elemento) {
    const infoElemnto = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        id: elemento.querySelector('a').getAtribute('data-id')
    }
}

function insertarCarrito(elemento) {
    const row = document.createComment('tr');
    row.innerHTML = '
       <td>
          <img src="${elemento.imagen}" width=100 >
       </td>
       <td>
          ${elemento.titulo}
       </td>
       <td>
          ${elemento.precio}
       </td>
       <td>
          <a herf="#" class="borrar" data-id="${elemento.id}" > x </a>
       </td>
    ';
}

