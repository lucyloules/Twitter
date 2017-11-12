/*Se carga toda la pagina primero y luego se ejecuta el js*/
window.onload = function() {

	/*declaro las variables globales*/
    var valor = document.getElementById("valor");
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

    comment.onkeyup = function(){ //detecta cuando se aprieta el teclado
            var largoCaracter = document.getElementById("comment").value.length; //variable que guarda el largo de caracteres
            var cuenta=document.getElementById("valor");
            cuenta.innerText = "" + (140 - largoCaracter); //cambio valor a contador
          
        //Boton: habilitado/desabilitado.
 	    if(largoCaracter >140){
            btn.disabled = true;
        } else{
            btn.disabled = false;
        
        };
        //Colores de los caracteres
        if (largoCaracter >= 0 && largoCaracter < 121) {
            valor.classList.add("blue");
            valor.classList.remove("red");
            valor.classList.remove("orange");
        }
        if(largoCaracter > 120 && largoCaracter < 131){
            valor.classList.add("orange"); //agrego clase red
            valor.classList.remove("blue");//remuevo clase blue
            valor.classList.remove("red");

        } else if(largoCaracter >130){
            valor.classList.add("red");//agrego clase blue
            valor.classList.remove("orange");//quito clase red
            valor.classList.remove("blue");
        }
    }    
  }
 

/* 
            Codigo fallido
            if (largoCaracter=0) {
                btn.disabled = true;
                cuenta.classList.add("valor");
            }else{
                btn.disabled = false;
                if (largoCaracter<121) {
                    // document.getElementById("valor").style.color = "#1DA1F2"; 
                }else if (largoCaracter<131) {
                    // document.getElementById("valor").style.color = "orange"; 
                    cuenta.classList.remove("valor"); 
                    cuenta.classList.add("orange");
                }else if(largoCaracter<141) {
                    // document.getElementById("valor").style.color = "red"; 
                    cuenta.classList.remove("valor");
                    cuenta.classList.remove("orange"); 
                    cuenta.classList.add("red"); 
                }else{
                    btn.disabled = true;
                    cuenta.classList.remove("valor");
                    cuenta.classList.remove("orange"); 
                    cuenta.classList.add("red"); 
                }
            }
         }; */
