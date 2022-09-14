// CONSTANTES
const NB_LIGNES = 20;
const NB_COL = 20;
// DOM
const root = document.querySelector("#root");
let snake;
let table;
let posX, posY;

const initGame = () => {
    // Creation de la grille container.
    table = document.createElement("table");
    root.appendChild(table);

    // Création des cellules qu'on ajoute dans le container table
    for(let ligne = 0; ligne < NB_LIGNES; ligne++){
        let tr = document.createElement("tr");
        for (let col = 0; col < NB_COL; col++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    // Création du player
    snake = document.createElement("div");
    snake.classList.add("styleGamer");
    // Pop le player dans un endroit de la map
    popPlayer(getNumberRandom(NB_LIGNES),getNumberRandom(NB_COL));
    // ajout des listeners du player
    functionListenersPlayer();

}

// Pop le joueur à la position x et y de la map
let popPlayer = (x,y) => {
    if(table){
        movePlayer(x,y);
        console.log("placer en " + x + " et " + y);
    }
    else{
        console.log("snake not ok");
    }
}

let moveRight = () => {
    if(table){
        movePlayer(posX, posY+1);
    }
    else{
        console.log("error moveRight");
    }
}

let moveLeft = () => {
    if(table){
        movePlayer(posX, posY-1);
    }
    else{
        console.log("error moveLeft");
    }
}

let moveTop = () => {
    if(table){
        movePlayer(posX-1, posY);
    }
    else{
        console.log("error moveTop");
    }
}

let moveBottom = () => {
    if(table){
        movePlayer(posX+1, posY);
    }
    else{
        console.log("error moveBottom");
    }
}

let movePlayer = (x,y) => {
    if (table) {

        // Gestion des limites de la map
        y = (y >= NB_COL) ? 0 : y;
        y = (y < 0) ? NB_COL - 1 : y;
        x = (x >= NB_LIGNES) ? 0 : x;
        x = (x < 0) ? NB_LIGNES - 1 : x;
        table.children[x].children[y].appendChild(snake);
        newPosPlayer(x,y);
    }
    else{
        console.log("error movePlayer");
    }
}

let newPosPlayer = (x,y) => {
    posX = x;
    posY = y;
}

// Retourne un nombre aléatoire en 0 et x non inclus
let getNumberRandom = (x) => {
    return Math.floor(Math.random() * x);
}

