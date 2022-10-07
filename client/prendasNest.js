"use strict";

let tbody = document.getElementById('tbody');

let btnAgregar = document.getElementById('btnAgregar');
let btnBuscarId = document.getElementById('btnBuscarId');
// let btnBuscarTipo = document.getElementById('btnBuscarTipo');


let prendas = [];
load();

// function agregar() {
//     let id = document.getElementById('id').value;
//     let prenda = document.getElementById('prenda').value;
//     let marca = document.getElementById('marca').value;
//     let precio = document.getElementById('precio').value;
//     let talle = document.getElementById('talle').value;
//     let tipo = document.getElementById('tipo').value;

//     let fila = {
//          id: id,
//          prenda: prenda,
//          marca: marca,
//          precio: precio,
//          talle: talle,
//          tipo: tipo,
//     };
//     prendas.push(fila);
//     mostrar();
//     id = document.getElementById('id').value = "";
//     prenda = document.getElementById('prenda').value = "";
//     marca = document.getElementById('marca').value = "";
//     precio = document.getElementById('precio').value = "";
//     talle = document.getElementById('talle').value = "";
//     tipo = document.getElementById('tipo').value = "";
// }
// btnAgregar.addEventListener('click', agregar)

btnAgregar.addEventListener("click", async () => {
    let id = document.getElementById('id').value;
    let prenda = document.getElementById('prenda').value;
    let marca = document.getElementById('marca').value;
    let precio = document.getElementById('precio').value;
    let talle = document.getElementById('talle').value;
    let tipo = document.getElementById('tipo').value;

    let fila = {
        id: id,
        prenda: prenda,
        marca: marca,
        precio: precio,
        talle: talle,
        tipo: tipo,
    };
    if (await aServidor(fila, 'A')) {
        load();
    }
    id = document.getElementById('id').value = "";
    prenda = document.getElementById('prenda').value = "";
    marca = document.getElementById('marca').value = "";
    precio = document.getElementById('precio').value = "";
    talle = document.getElementById('talle').value = "";
    tipo = document.getElementById('tipo').value = "";
});

function mostrar() {
    let html = "";
    for (let r of prendas) {
        html += `
            <tr>
            <td><a href="./ejemploPrenda.html?id=${r.id}">${r.id}</a></td>
            <td>${r.prenda}</td>
            <td>${r.marca}</td>
            <td>$${r.precio}</td>
            <td>${r.talle}</td>
            <td>${r.tipo}</td>
        `;
    }
    tbody.innerHTML = html;
}


btnBuscarId.addEventListener('click', () => {
    let id = parseInt(document.getElementById('id').value);
    if (id) {
        load(id);
    }
    document.getElementById('id').value = "";
})

async function load(identificador) {
    prendas = [];
    let url = "";
    if (identificador)
        url = `/indumentaria/${identificador}`;
    else
        url = '/indumentaria';
    let respuesta = await fetch(url);
    if (respuesta.ok) {
        if (identificador)
            prendas.push(await respuesta.json());
        else
            prendas = await respuesta.json();
    }
    mostrar();
}

// async function load(param) {
//     prendas = [];
//     let url = "";
//     if (typeof param === 'number') {
//         url = `/indumentaria/${param}`;
//     } else if (typeof param === 'string') {
//         url = `/indumentaria/tipo/${param}`;
//     } else {
//         url = '/indumentaria';
//     }
//     let respuesta = await fetch(url);
//     if (respuesta.ok) {
//         if (param)
//             prendas.push(await respuesta.json());
//         else
//             prendas = await respuesta.json();
//     }
//     mostrar()
// }

async function aServidor(datos, accion) {
    let respuesta;
    switch (accion) {
        case 'A': {     //ALTA
            respuesta = await fetch('/indumentaria', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            });
            break;
        }
        case 'D' : {     //DELETE
            respuesta = await fetch(`/indumentaria/${id}`, {
                method: 'DELETE'
            });
            break;
        }
        case 'U': {      //ACTUALIZACIÓN
            respuesta = await fetch(`/indumentaria/${datos.prendas[0].id}`, {
                method: 'PUT',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify(datos)
            });
            break;
        }
    }
    return ((await respuesta.text()) == "ok");
}