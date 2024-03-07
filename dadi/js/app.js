//dichiaro una variabile userButton e la recupero dal DOM con querySelector tramite la sua classe

//dichiaro una variabile CPUButton e la recupero dal DOM con querySelector tramite la sua classe

//resto in ascolto per l'evento click sull'userButton, in modo che mi generi il numero al click stesso
//generare un numero randomico tra l'1 ed il 6 per il giocatore
    //dichiarare una variabile playerNumber ed assegnargli un valore randomico tra 1 e 6
    let playerNumber = Math.floor(Math.random() * 6) + 1;
    //stampare in pagina questa variabile
    
//resto in ascolto per l'evento click sul CPUButton, in modo che mi generi il numero al click stesso
//generare un numero randomico tra l'1 ed il 6 per il computer
    //dichiarare una variabile CPUNumber ed assegnargli un valore randomico tra 1 e 6
    let CPUNumber = Math.floor(Math.random() * 6) + 1;
    //stampare in pagina questa variabile

//SE il numero randomico del giocatore > del numero randomico del computer (playerNumber > CPUNumber)
    //stampare in pagina "Hai vinto!"
//ALTRIMENTI
    //stampare in pagina "Hai perso!"