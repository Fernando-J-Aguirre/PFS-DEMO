"use strict";

let tbody = document.getElementById('tbody');

let btnAgregar = document.getElementById('btnAgregar');
// let btnEliminar = document.getElementById('btnEliminar');

let clientes = [];
load();

function agregar() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let domicilio = document.getElementById('domicilio').value;
    let mail = document.getElementById('mail').value;

    let fila = {
         nombre: nombre,
         apellido: apellido,
         domicilio: domicilio,
         mail: mail,
    };
    clientes.push(fila);
    mostrar();
    nombre = document.getElementById('nombre').value = "";
    apellido = document.getElementById('apellido').value = "";
    domicilio = document.getElementById('domicilio').value = "";
    mail = document.getElementById('mail').value = "";
}

function mostrar() {
    let html = "";
    for (let r of clientes) {
        html += `
            <tr>
            <td>${r.nombre}</td>
            <td>${r.apellido}</td>
            <td>${r.domicilio}</td>
            <td>${r.mail}</td>
        `;
    }
    tbody.innerHTML = html;
}

btnAgregar.addEventListener('click', agregar)

async function load() {
    let respuesta = await fetch('/cliente');
    if (respuesta.ok) {
        clientes = await respuesta.json()
        mostrar();
    }
}
