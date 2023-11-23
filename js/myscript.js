// Al click dell’utente sulle frecce (sia Prev che Next), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


const item = document.getElementsByClassName("item");
console.log(item);

// definizione variabili
let activeItem = 0;

// selezione bottoni
const right = document.getElementById("button_right");
const left = document.getElementById("button_left");

// al click del bottone right spostiamo la classe active all'immagine successiva
right.addEventListener("click", 
    function(){
        if(activeItem < item.length -1){
            item[activeItem].classList.remove("active");

            activeItem ++;

            item[activeItem].classList.add("active");

        }

    }
)
 

// al click del bottone left spostiamo la classe active all'immagine precedente
left.addEventListener("click", 
    function(){
        if(activeItem > 0){
            item[activeItem].classList.remove("active");

            activeItem --;

            item[activeItem].classList.add("active");
        }
    }
)