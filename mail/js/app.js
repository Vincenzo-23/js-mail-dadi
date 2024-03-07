//dichiaro una variabile e uso il querySelector per recuperare il button all'interno DOM tramite selettore (classe)
const checkButtonDOMElement = document.querySelector(".check");

//dichiaro una variabile e uso getElementById per recuperare l'input email all'interno del DOM tramite ID
const inputMailDOMElement = document.getElementById("user_mail");

//dichiaro una variabile e uso il querySelector per recuperarla all'interno DOM tramite selettore (classe)
const checkResult = document.querySelector(".check_result")




//creo un array con all'interno una serie di mail di persone che possono accedere
const mails = ["vincenzo@gmail.com", "marco@gmail.com", "luca@gmail.com", "giorgia@gmail.com", "andrea@gmail.com"]

//resto in ascolto per l'evento click sul mio button
checkButtonDOMElement.addEventListener("click", function(){

    //dichiaro una variabile in cui recupero il value dell'input mail che abbiamo chiesto all'utente (esempio: userMail)
    const userMail = inputMailDOMElement.value;
    
    //dichiaro una variabile di controllo per verificare la presenza della mail inserita dall'utente all'interno di quelle
    //nel mio array
    let isUserMailInArray = false

    //creo un ciclo for per far scorrere ogni elemento dell'array (esempio: for (let i = 0; i < mails.length; i++){})
    for (let i = 0; i < mails.length; i++){
        
        //salvo l'elemento attuale dell'array in una variabile (esempio: const mail = mails[i])
        const mail = mails[i]

        //controllo che la mail inserita dall'utente corrisponda all'elemento attuale dell'array
        //quindi SE (userMail === mail)
        if (userMail === mail){

            //modifico il valore della variabile di controllo (quindi: variabile di controllo = true)
            isUserMailInArray = true
        }

    }
    
    
    
    
    //SE l'utente ha inserito una mail presente tra quelle nell'array(variabile di controllo = true)
    if (isUserMailInArray === true){

        //stampo in console un messaggio appropriato in pagina con l'esito positivo
        console.log("presente")
        //stampo in pagina un messaggio appropriato in pagina con l'esito positivo
            //aggiungo il testo da stampare in pagina tramite innerHTML
            checkResult.innerHTML += `Autorizzato all'accesso`
            //aggiungo una classe a checkResult per modificarne lo stile
            checkResult.classList.add("color_green")
        //ALTRIMENTI
    }else{
        //stampo un messaggio appropriato in pagina con l'esito negativo
        console.log("non presente")
        //stampo in pagina un messaggio appropriato in pagina con l'esito positivo
            //aggiungo il testo da stampare in pagina tramite innerHTML
            checkResult.innerHTML += `Accesso negato`
            //aggiungo una classe a checkResult per modificarne lo stile
            checkResult.classList.add("color_red")
    }


})
