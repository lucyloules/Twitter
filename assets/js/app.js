/*Se carga toda la pagina primero y luego se ejecuta el js*/
window.onload = function() {

	/*declaro las variables*/

/*    var submit = document.getElementsByName("btn")[0];
    var commentInput = document.getElementsById("comment")[0];
    var timeLine = document.getElementsById("timeLineShow")[0];*/
    var valor = document.getElementById("valor").value;
    var max= 140;
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
            var dateSpan = document.createElement("span");
            var nameSpan = document.createElement("span");
            var tuitP = document.createElement("p");

            tuitDiv.appendChild(dateSpan); 
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "tuit"
            nameSpan.textContent = " Lucia: ";
            tuitP.textContent = commentInput.value;//lo que ingresa el usuario
            dateSpan.textContent = new Date();
            /* Usamos timeLine.children para obtener los hijos del nodo, este siempre es un arreglo, aunque venga vacío. 
             YYYYYYYY... como insertBefore recibe dos parámetros y el segundo es opcional, si, el primer nodo no existe en 
             el arreglo children, entonces nos dará undefined. Y eso hará que insertBefore agregue el nodo al último */
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);
        }
    }
    /* Funcion cuenta los caracteres del comentario de usuario */
    comment.onkeydown = function(){ //detecta cuando se aprieta el teclado
            var largoCaracter = document.getElementById("comment").value.length; //cuenta caracteres
             var cuenta=document.getElementById("valor");
            cuenta.innerText = "" + (140 - largoCaracter); //cambio valor a contador
        
             //Si hay más de 140 caracteres, boton desabilitado.
             if(largoCaracter <141){
                      btn.disabled = false;
                 } else{
                      btn.disabled = true;
                 };
        
                 //tiene q ser numero para que funcione
                 //  si quedan  de 20 acaracteres cambiar color del texto
                if(largoCaracter >= 120 && largoCaracter < 130){
                    //valor.classList.add("red");
                    //remuevo bluo para cuando reste caracteres
                    cuenta.classList.remove('blue');
                    //agrego clase red 
                    cuenta.classList.add('red');
                } else if(largoCaracter >= 130){
                    //quito clase red
                    cuenta.classList.remove('red');
                    //agrego clase blue
                    cuenta.classList.add('blue');
                }
                else{
                    //sino remuevo ambas
                    cuenta.classList.remove('red');
                    cuenta.classList.remove('blue');
                };
                 
         };
}
