const pantalla = document.querySelector(".calculator__screen");
const botones = document.querySelectorAll(".btn");


// querySelectorAll crea un array, por lo que lo recorremos con un forEach
botones.forEach(boton => {
    //para cada botón se crea un eventListener de click, y cuándo se clickea el texto de la pantalla pasa a ser el botón apretado
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        //si el botón apretado tiene el id de C el contenido de la pantalla se vuelve 0, le damos un return; para que no siga ejecutando funciones de más abajo
        if (boton.id == "C") {
            pantalla.textContent = "0";
            return;
        }
        //si el botón tiene el id de < se ejecuta en siguiente if
        if (boton.id == "<") {
            //si el string que aparece en la pantalla tiene un length = 1 o el texto de la pantalla es igual a "Syntax error" al apretar el botón la pantalla vuelve
            //a cero
            if (pantalla.textContent.length === 1 || pantalla.textContent == "Syntax Error") {
                pantalla.textContent = "0";
            }
            //Si no se cumple el if anterior al presionar el botón se borra el último número del string usando el método slice, que empieza a evaluar desde la
            //posición 0 hasta el último dijito simbolizado con el -1 y al apretar el botón se elimina este mismo 
            else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        //si el botón tiene el id de =, intenta hacer la condición dentro del try, que utiliza una función eval para evaluar operaciones matemáticas en strings
        //si no se puede hacer la operación matemática es porque hay algún error de escritura, por lo tanto el catch agarra el erro y muestra en pantalla el texto
        //"Syntax Error"
        if (boton.id == "=") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch (e) {
                pantalla.textContent = "Syntax Error";
            }
            return;
        }
        //si el contenido de la pantalla es 0 o es "Syntax Error" el contenido de la pantalla pasa a ser el contenido del botón que se apretó
        if (pantalla.textContent === "0" || pantalla.textContent == "Syntax Error") {
            pantalla.textContent = botonApretado;
        } 
        //si no se cumple la anterior condición se concatena el valor del botón apretado con el valor del anterior botón apretado
        else {
            pantalla.textContent += botonApretado;
        }
    })
})