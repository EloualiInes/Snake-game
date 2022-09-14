let listeners = {
    // Fleche directionnel
    // gauche = 37 jusqu' = 38droite = 39bas = 40
    move: function (e) {
        console.log("event : " + e)
        // Déplacement à droite
        if(e.keyCode == 39){
            moveRight();
        }
        // Déplacement à gauche
        else if(e.keyCode == 37){
            moveLeft();
        }
        // Déplacement en haut
        else if(e.keyCode == 38){
            moveTop();
        }
    }
}

let functionListenersPlayer = () => {
    window.addEventListener("keydown", listeners.move);
}