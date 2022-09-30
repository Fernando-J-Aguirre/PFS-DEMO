"use strict";

let tbody = document.getElementById('tbody');

let btnAgregar = document.getElementById('btnAgregar');
let btnBuscar = document.getElementById('btnBuscar');


let prendas = [];
load();

function agregar() {
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
    prendas.push(fila);
    mostrar();
    id = document.getElementById('id').value = "";
    prenda = document.getElementById('prenda').value = "";
    marca = document.getElementById('marca').value = "";
    precio = document.getElementById('precio').value = "";
    talle = document.getElementById('talle').value = "";
    tipo = document.getElementById('tipo').value = "";
}

function mostrar() {
    let html = "";
    for (let r of prendas) {
        html += `
            <tr>
            <td>${r.id}</td>
            <td>${r.prenda}</td>
            <td>${r.marca}</td>
            <td>$${r.precio}</td>
            <td>${r.talle.toUpperCase()}</td>
            <td>${r.tipo}</td>
        `;
    }
    tbody.innerHTML = html;
}

btnAgregar.addEventListener('click', agregar)

btnBuscar.addEventListener('click', () => {
    let id = parseInt(document.getElementById('id').value);
    if(id) {
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





// async function load() {
//     let respuesta = await fetch('/indumentaria');
//     if (respuesta.ok) {
//         prendas = await respuesta.json()
//         mostrar();
//     }
// }

