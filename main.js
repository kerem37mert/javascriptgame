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

const playGame = () => {
    const charDom = document.createElement("img");
    charDom.setAttribute("src","img/char.png");
    gameDom.append(charDom);
}