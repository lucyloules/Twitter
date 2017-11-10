/*Se carga toda la pagina primero y luego se ejecuta el js*/
window.onload = function() {

	/*declaro las variables*/

/*    var submit = document.getElementsByName("btn")[0];
    var commentInput = document.getElementsById("comment")[0];
    var timeLine = document.getElementsById("timeLineShow")[0];*/
    var valor = document.getElementById("valor").value;
    var max=140;
    var submit = document.getElementById("btn");
    var commentInput = document.getElementById("comment");
    var long  =comment.leng
    var timeLine = document.getElementById("timeLineShow");

    /*de submit agrego funcion on click*/
    submit.onclick = function() {
    	/*valida que el comentario no este vacio, en caso de que lo esté
    	se muestra una alerta para el usuario*/
        if (commentInput.value == "") {
            alert("Ingrese un Comentario");

        } else {
        	/*Por cada comentario válido, se crean 4 elementos*/
            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");

            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "tuit"
            nameSpan.textContent = "Lucylouless ";
            dateSpan.textContent = new Date();
            tuitP.textContent = commentInput.value;//lo que ingresa el usuario

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
