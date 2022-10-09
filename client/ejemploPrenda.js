let titulo = document.querySelector(".titulo");

let parametros = [];
function procesarParametros() {
    parametros = [];
    let parStr = window.location.search.substr(1);
    let parArr = parStr.split("&");
    for (let i = 0; i < parArr.length; i++) {
        let par = parArr[i].split("=");
        parametros[par[0]] = par[1];
    }
}

load();

////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function load() {
    try {
        prendas = [];
        procesarParametros();
        let url = `/indumentaria/${parametros['id']}`;
        let respuesta = await fetch(url);
        if (respuesta.ok) {
            let prenda = await respuesta.json();
            document.querySelector(".titulo").innerHTML = `${prenda['prenda']} - ID: ${prenda['id']}`;
            // document.querySelector('#id').value = prenda['id'];
            document.querySelector('#prenda').value = prenda['prenda'];
            document.querySelector('#marca').value = prenda['marca'];
            document.querySelector('#precio').value = prenda['precio'];
            document.querySelector('#talle').value = prenda['talle'];
            document.querySelector('#tipo').value = prenda['tipo'];
            document.querySelector('#acciones').innerHTML = `
            <button class="btnDelPrenda" id="${prenda['id']}">Borrar</button>
            <button class="btnUpdPrenda" id="${prenda['id']}">Actualizar</button><br><br><br>
            <a href="ejemploPrendas.html">Regresar</a>`;
            let btnBorrar = document.querySelector('.btnDelPrenda');
            btnBorrar.addEventListener('click', async () => {
                let id = btnBorrar.getAttribute('id');
                if (await aServidor(id, 'D')) {
                    document.querySelector('#acciones').innerHTML = `<a href="ejemploPrendas.html">Regresar</a>`;
                }
            });
            let btnModificar = document.querySelector('.btnUpdPrenda');
            btnModificar.addEventListener('click', async () => {
                // let id = btnModificar.attributes['id'].value;
                let renglon = {
                    "cantidad": 1,
                    "prendas": [
                        {
                            "id": prenda['id'],
                            "prenda": document.querySelector('#prenda').value,
                            "marca": document.querySelector('#marca').value,
                            "precio": document.querySelector('#precio').value,
                            "talle": document.querySelector('#talle').value,
                            "tipo": document.querySelector('#tipo').value
                        }
                    ]
                }
                if (await aServidor(renglon, 'U')) {
                    document.querySelector('#acciones').innerHTML = `<a href="ejemploPrendas.html">Regresar</a>`;
                }
            });
        } else {
            document.querySelector("#titulo").innerHTML = `ERROR - Fallo URL`;
        }
    } catch (error) {
        document.querySelector("#titulo").innerHTML = `ERROR - Fallo en Conexion`;
    }
}


async function aServidor(datos, accion) {
    let respuesta;
    switch (accion) {
        case 'D': {    //ELIMINACION
            respuesta = await fetch(`/indumenaria/${datos}`, {
                method: 'DELETE'
            });
            break; 
        }
        case 'U': {     //ACTUALIZACION
            respuesta = await fetch(`/indumentaria/${datos.prendas[0].id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(datos)
            });
            break;
        }
    }
    return ((await respuesta.text()) == "ok");
}