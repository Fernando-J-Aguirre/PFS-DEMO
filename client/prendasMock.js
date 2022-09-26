"use strict";

let tbody = document.getElementById('tbody');

let btnAgregar = document.getElementById('btnAgregar');
let btnEliminar = document.getElementById('btnEliminar');

let prendas = [];
load();

function agregar() {
    let prenda = document.getElementById('prenda').value;
    let marca = document.getElementById('marca').value;
    let precio = document.getElementById('precio').value;
    let talle = document.getElementById('talle').value;
    let fila = {
        "prenda": prenda,
        "marca": marca,
        "precio": precio,
        "talle": talle
    };
    prendas.push(fila);
    mostrar();
    prenda = document.getElementById('prenda').value = "";
    marca = document.getElementById('marca').value = "";
    precio = document.getElementById('precio').value = "";
    talle = document.getElementById('talle').value = "";
}

function mostrar() {
    let html = "";
    for (let r of prendas) {
        html += `
            <tr>
            <td>${r.prenda}</td>
            <td>${r.marca}</td>
            <td>${r.precio}</td>
            <td>${r.talle}</td>
        `;
    }
    tbody.innerHTML = html;
}

btnAgregar.addEventListener('click', agregar)

btnEliminar.addEventListener('click', () => {
    while (tbody.firstChild) {                    
        tbody.removeChild(tbody.firstChild);      
    }
    prendas = [];
})

async function load() {
    let respuesta = await fetch('./mockPrendas.json');
    if (respuesta.ok) {
        let datos = await respuesta.json()
        prendas = datos.prendas;
        mostrar();
    }
}

