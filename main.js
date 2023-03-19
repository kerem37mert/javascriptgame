/* Character width: 80px height: 50px  */

const gameDom = document.querySelector(".game");
const playButton = document.createElement("div");

playButton.innerHTML = "Başla";
playButton.style.width = "120px";
playButton.style.height = "60px";
playButton.style.backgroundColor = "cyan";
playButton.style.display = "flex";
playButton.style.justifyContent = "center";
playButton.style.alignItems = "center";
playButton.style.position = "relative";
playButton.style.top = "220px";
playButton.style.left = "330px";
playButton.style.borderRadius = "60px";
playButton.style.cursor = "pointer";
gameDom.append(playButton);

playButton.addEventListener("click", () => {
    playButton.style.display = "none";
    playGame();
});

//Character position
let positionY = 0;
let positionX = 0;

const playGame = () => {
    const charDom = document.createElement("img");
    charDom.setAttribute("src","img/char.png");
    charDom.style.width = "80px";
    charDom.style.height = "50px";
    charDom.style.position = "absolute";
    charDom.style.left = "0";
    charDom.style.bottom = "0";
    gameDom.append(charDom);

    window.addEventListener("keydown", (event) => {
        if(event.keyCode === 37){
            positionX -= 80;
        }
        else if(event.keyCode === 38){
            positionY += 50;
        }
        else if(event.keyCode === 39){
            positionX += 80;
        }
        else if(event.keyCode === 40){
            positionY -= 50;
        }

        charDom.style.left = positionX + "px";
        charDom.style.bottom = positionY + "px";
    });
}