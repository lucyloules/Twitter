window.onload = function() {
    /*Esto es porque soy flojo, getElements... entrega arreglo y 
    solo queremos el primero de sus elementos que retorna porque 
    sabemos que existe al menos uno*/
    var sendButton = document.getElementsByName("enviar")[0];
    var thinkInput = document.getElementsByName("loQuePenso")[0];
    var timeLine = document.getElementsByName("lineaDeTiempo")[0];
    sendButton.onclick = function() {
        if (thinkInput.value == "") {
            alert("tení k poner algo oe!");
        } else {
            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "tuit"
            nameSpan.textContent = "El Brayatan";
            dateSpan.textContent = new Date();
            tuitP.textContent = thinkInput.value;

            /* Usamos timeLine.children para obtener los hijos
             del nodo, este siempre es un arreglo, aunque venga
             vacío. 
             YYYYYYYY... como insertBefore recibe dos parámetros y
             el segundo es opcional, si, el primer nodo no existe en 
             el arreglo children, entonces nos dará undefined. Y eso hará 
             que insertBefore agregue el nodo al último */
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);
        }
    }
}
