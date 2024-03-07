//dichiaro una variabile userButton e la recupero dal DOM con querySelector tramite la sua classe
const userButton = document.querySelector(".user_button")

//dichiaro la variabile showPlayerNumber e la recupero dal DOM con queryselector tramite la sua classe
const showPlayerNumber = document.querySelector(".show_player_number")

//dichiaro la variabile showCPUNumber e la recupero dal DOM con queryselector tramite la sua classe
const showCPUNumber = document.querySelector(".show_cpu_number")

//dichiaro la variabile gameResult e la recupero dal DOM con queryselector tramite la sua classe
const gameResult = document.querySelector(".game_result")

//resto in ascolto per l'evento click sull'userButton, in modo che mi generi il numero suo e del CPU al click dello stesso
userButton.addEventListener("click", function(){

    //generare un numero randomico tra l'1 ed il 6 per il giocatore
        //dichiarare una variabile playerNumber ed assegnargli un valore randomico tra 1 e 6
        let playerNumber = Math.floor(Math.random() * 6) + 1;
    //stampare in console questa variabile
        console.log("Il numero del giocatore è ", playerNumber)
    //stampare in pagina questa variabile
        //tramite innerHTML aggiungo in corrispondenza della variabile showPlayerNumber il playerNumber nel DOM
        showPlayerNumber.innerHTML += `${playerNumber}`


        
    //generare un numero randomico tra l'1 ed il 6 per il computer
        //dichiarare una variabile CPUNumber ed assegnargli un valore randomico tra 1 e 6
        let CPUNumber = Math.floor(Math.random() * 6) + 1;
    //stampare in console questa variabile
        console.log("Il numero del computer è ", CPUNumber)
    //stampare in pagina questa variabile
        //tramite innerHTML aggiungo in corrispondenza della variabile showCPUNumber il CPUNumber nel DOM
        showCPUNumber.innerHTML += `${CPUNumber}`



    //SE il playerNumber > CPUNumber 
        if (playerNumber > CPUNumber){
            //stampare in console "hai vinto!"
            console.log("hai vinto!")
            //stampare in pagina "Hai vinto!"
                //tramite innerHTML aggiungo in corrispondenza della variabile gameResult il messaggio "hai vinto!" nel DOM
            gameResult.innerHTML += `Hai vinto!`

            //ALTRIMENTI SE il playerNumber === CPUNumber
        }else if (playerNumber === CPUNumber){

            //stampare in console "Pareggio!"
            console.log("Pareggio!")
            //stampare in pagina "Pareggio!"
                //tramite innerHTML aggiungo in corrispondenza della variabile gameResult il messaggio "Pareggio!" nel DOM
            gameResult.innerHTML += `Pareggio!`

            //ALTRIMENTI
        }else{
            //stampare in console "Hai perso!"
            console.log("Hai perso!")  
            //stampare in pagina "Hai perso!"
                //tramite innerHTML aggiungo in corrispondenza della variabile gameResult il messaggio "Hai perso!" nel DOM
            gameResult.innerHTML += `Hei perso!`  

        }

})




