// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
        
        function agregarAmigo() {
            let input = document.getElementById("amigo");
            let nombre = input.value.trim();
            if (!nombre) {
                alert("Por favor ingrese un nombre Valido.");
                return;
            }
            if (nombre && !amigos.includes(nombre)) {
                amigos.push(nombre);
                actualizarLista();
                input.value = "";
            }
        }
        
        function actualizarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";
            amigos.forEach(nombre => {
                let li = document.createElement("li");
                li.textContent = nombre;
                lista.appendChild(li);
            });
        }
        
        function sortearAmigo() {
            if (amigos.length < 2) {
                alert("Debe haber al menos dos participantes para el sorteo.");
                return;
            }
            let ganador = amigos[Math.floor(Math.random() * amigos.length)];
            document.getElementById("resultado").innerHTML = `<h3>El amigo secreto es: ${ganador}</h3>`;
            amigos = [];
            actualizarLista();
        }