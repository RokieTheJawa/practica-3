let baseUrl = "http://localhost:9000";
let productos = [];

function ObtenerProductos() {
    console.log(baseUrl+'/api/')
  fetch(baseUrl + '/api/').then(res => {
    res.json().then(json => {
      productos = json;
      ImprimirProductos();
    });
  });
}

function ImprimirProductos() {
  let contenedor = document.getElementById("cuerpoTabla");
  contenedor.innerHTML = "";

  productos.forEach(producto => {
    contenedor.innerHTML += MapearProducto(producto);
  });
}

function MapearProducto(producto) {
  return `<tr>
  <td>
    <button class='btn btn-danger btn-sm' onclick="EliminarProducto(${producto.id})">Eliminar</button>
    <button class='btn btn-warning btn-sm' onclick="PopularDatosCampos(${producto.id})">Actualizar</button>
    </td>
  <td>${producto.id}</td>
  <td>${producto.titulo}</td>
  <td>${producto.autor}</td>
  <td>${producto.edicion}</td>
</tr>`;
}

function EliminarProducto(pid) {
  fetch(baseUrl + '/api/' + pid, { method: "Delete" }).then(res => {
    console.log(res);
    ObtenerProductos();
  });
}

function GuardarProducto() {
  console.log('guardar')
  let data = {
    titulo: document.getElementById("titulo").value,
    autor: document.getElementById("autor").value,
    edicion: document.getElementById("edicion").value,
  };

  fetch(baseUrl + "/api", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": 'application/json; charset=UTF-8'
    }
  }).then(res => {
    ObtenerProductos();
    DatosEnCeros()
  });
}

function PopularDatosCampos(pid) {
  let producto = productos.filter(p => { return p.id == pid })[0];

  document.getElementById('titulo').value = producto.titulo;
  document.getElementById('autor').value = producto.autor;
  document.getElementById('edicion').value = producto.edicion;
  document.getElementById('productoId').value = producto.id;
}

function DatosEnCeros() {
  document.getElementById('frmProductos').reset()
}

function ActualizarProducto() {
  let data = {
    titulo: document.getElementById("titulo").value,
    autor: document.getElementById("autor").value,
    edicion: document.getElementById("edicion").value,
    id: document.getElementById('productoId').value
  };

  fetch(baseUrl + "/api/" + data.id, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": 'application/json; charset=UTF-8'
    }
  }).then(res => {
    ObtenerProductos();
    DatosEnCeros()
  });
}