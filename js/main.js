document.getElementById("formulario").addEventListener("submit",buscar)
document.getElementById("busqueda").addEventListener("keyup",buscar)
document.getElementById("boton_machos").addEventListener("click", machos)
document.getElementById("boton_hembras").addEventListener("click", hembras)
document.getElementById("boton_todos").addEventListener("click", todos)



function todos(){
    const arreglo_filtrado = elefantes.filter((elefante)=>{
        return elefante.fictional == "false";
    })
    dibujar(arreglo_filtrado)
}


function hembras(){
    const arreglo_Hembras = elefantes.filter((elefante)=>{
        return elefante.sex == "Female";
    });
    dibujar(arreglo_Hembras);
}


function machos(){
    const arreglo_filtrado = elefantes.filter((elefante)=>{
        return elefante.sex == "Male";
    });
    dibujar(arreglo_filtrado);
}


function buscar(evt){
    evt.preventDefault();
    let elefante_a_buscar = document.getElementById("busqueda").value;

    const aux = elefantes.filter((elefante)=>{
        return elefante.name.toLowerCase().includes( elefante_a_buscar.toLowerCase())
    });

    dibujar(aux);

}

function dibujar(elefante_filter){
    document.querySelector("#contenedor").innerHTML="";
    elefante_filter.forEach((elefante, i)=>{
        //console.log(elefante.name)
            document.querySelector("#contenedor").innerHTML+=`<div class="col-3">
                <div class="card mb-5">
                <img src="${elefante.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${elefante.name}</h5>
                <p class="card-text">${elefante.note}</p>
                <a href="${elefante.wikilink}" target="_blank" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
        </div>`
    })
}

dibujar(elefantes);


