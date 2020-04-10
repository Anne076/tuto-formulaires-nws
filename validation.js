// les écouteurs d'évènement ne doivent être chargés que lorsque l'arbre DOM est prêt
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("le document est chargé, on peut ajouter des écouteurs");

    // le bouton "submit" provoque l'envoi des données au serveur
    // on va l'en empêcher pour pouvoir vérifier tranquillement le contenu
    document.querySelector("#envoi").addEventListener("click", async function (event) {
        // on bloque l'envoi du formulaire vers le serveur..
        event.preventDefault();
        if (!validerFormulaire()) {
            <p>des erreurs ont été trouvées</p>;
        } else {
            <p>>Le formulaire est correct, on envoie au serveur </p>;
            document.querySelector("#formulaire").submit();
        }

    }, false);
});

// fonction globale de validation du formulaire
function validerFormulaire() {
    if (!validerNom()) {
        return false;
    }

    if (!validerMessage()){
        return false;
    }
}

    // vous pouvez insérer d'autres éléments de validation ici

    function validertel() {
        var tel = document.querySelector("#tel").value;
        var taille_maxi_tel=10
        if (!verifierTaille(tel, taille_maxi_tel)){
            return false;
        } else if (!verifierCaracteresInterdits(tel)) {
            //(0-9 test  == false)} 
            <p>Ces carractéres sont interdits</p>       
            return false;
        } else {
            <p>Ces carractéres sont validé(s)</p> 
            return true;
        }

    // si aucune erreur n'a été trouvée, on arrive ici
    return true;
}

// fonction de validation du nom
function validerNom() {
    var nom = document.querySelector("#name").value;
    var taille_mini_nom=3
    if (!verifierTaille(nom, taille_mini_nom)){
        <p>Ces carractéres sont interdits</p>  
        return false;
    } else if (!verifierCaracteresInterdits(nom)) {
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits
        <p>Ces carractéres sont interdits</p>
        return false;
    } else {
        <p>Ces carractéres sont validé(s)</p>    
        return true;
    }
}

// fonction de validation du message
function validerMessage(){
    var message = document.querySelector("#msg").value; 
    if (!verifierCaracteresInterdits(message)) {
        <p>Ces carractéres sont interdits</p>    
        return false;
    } else {
        <p>Ces carractéres sont validé(s)</p> 
        return true;
    }
}

// la chaine doivent avoir une taille d'au moins la taille fournie
function verifierTaille(chaine, taille_mini_chaine) {
    if (chaine.length < taille_mini_chaine) {
        <p>Ces carractéres sont interdits</p>  
        return false;
    }else{
        <p>Ces carractéres sont validé(s)</p> 
        return true;
    }
}

// les chaines ne peuvent contenir que 
// des lettres 
// des chiffres
// des espaces
// des apostrophes
function verifierCaracteresInterdits(chaine){
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    if(/^[a-zA-Z0-9 ']*$/.test(chaine) == false){
        <p>Ces carractéres sont interdits</p>
        return false;
    }
    <p>Ces carractéres sont validé(s)</p> 
    return true;
};