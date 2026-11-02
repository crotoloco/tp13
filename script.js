// Registra una máquina: valida, muestra en consola y en el <div>
function registrarMaquina() {
  const nombre = document.getElementById("nombre").value.trim();
  const tipo = document.getElementById("tipo").value;
  const horas = document.getElementById("horas").value;

  // Validación: el nombre no puede estar vacío
  if (nombre === "") {
    alert("Por favor, ingresá el nombre de la máquina.");
    return;
  }

  // Datos en la consola
  console.log("Nombre:", nombre);
  console.log("Tipo:", tipo);
  console.log("Horas de uso:", horas);

  // Mostrar el <div> y cargar los datos
  const resultado = document.getElementById("resultado");
  resultado.classList.remove("oculto");
  resultado.innerHTML = "";

  const datos = [
    ["Nombre de la máquina", nombre],
    ["Tipo de máquina", tipo],
    ["Horas de uso", horas === "" ? "0" : horas]
  ];

  datos.forEach(function (dato) {
    const p = document.createElement("p");
    const etiqueta = document.createElement("strong");
    etiqueta.textContent = dato[0] + ": ";
    p.appendChild(etiqueta);
    p.appendChild(document.createTextNode(dato[1]));
    resultado.appendChild(p);
  });

  // Botón para borrar el registro
  const botonBorrar = document.createElement("button");
  botonBorrar.type = "button";
  botonBorrar.className = "peligro";
  botonBorrar.textContent = "Borrar Registro";
  botonBorrar.onclick = borrarRegistro;
  resultado.appendChild(botonBorrar);
}

// Elimina el contenido del <div> y lo vuelve a ocultar
function borrarRegistro() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  resultado.classList.add("oculto");
}

// Cambia entre index.html y normas.html
function cambiarPagina(pagina) {
  window.location.href = pagina;
}
