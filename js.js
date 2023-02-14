//Manejo del DOM

//Crear un anotador, dónde el usuario deberá seleccionar si desea realizar una lista de tareas o de compras del super, una vez seleccionado el navegador lo deberá redirigir a una página dónde el usuario podrá agregar ya sea tareas o productos para comprar (dependiendo de la opción elegida previamente), las mismas se deberán mostrar en una tabla al lado del input y el botón para que el usuario pueda ver el listado y así eliminarlas de la lista o agregar nuevas.
//		Requisitos extra:
//Si el usuario sale de la pantalla al volver la lista deberá permanecer de la   misma forma en la que quedó antes de que el usuario se vaya.
//Utilizar objetos creados a través de clases.
//Prestar MUCHA importancia al diseño de la página

const botonAgregar = document.getElementById("button-addon2")
const inputAgregado = document.getElementById("input1")

let agregados = []
if (localStorage.getItem("agregados")) {
    agregados = JSON.parse(localStorage.getItem("agregados"))
}

class producto {
    constructor(agregado) {
        this.agregado = agregado
    }
}


botonAgregar.addEventListener("click",(e) => {
    e.preventDefault()
    const agregado = inputAgregado.value
    const nuevoProducto = new producto (agregado)
    agregados.push(nuevoProducto)
    form.reset()
    localStorage.setItem("agregados", JSON.stringify(agregados))
    
})

