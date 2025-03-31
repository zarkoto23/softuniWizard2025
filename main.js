//initialization game state
const state = {
  player: "Navcho",
  wizard: {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
  },
  isGameOver:false
};

//obj creation
const gameArea = document.querySelector(".game-area");
const factory = {
  createWizard(wizard) {
    //create El
    const wizardElement = document.createElement("div");
    wizardElement.classList.add("wizard");

    //set styles
    wizardElement.style.width = wizard.width + "px";
    wizardElement.style.height = wizard.height + "px";
    wizardElement.style.backgroundImage = 'url("images/wizard.png")';
    wizardElement.style.backgroundSize = "contain";
    wizardElement.style.backgroundRepeat = "no-repeat";
    wizardElement.style.backgroundPosition = "center";

    gameArea.appendChild(wizardElement);

    //set position

    wizardElement.style.position = "absolute";
    wizardElement.style.left = wizard.x + "px";
    wizardElement.style.top = wizard.y + "px";

    //attach to dom
  },
};
//input control

//game loop

//game frames
function newFrame() {
  const wizardElement = document.querySelector(".wizard");
  wizardElement.style.left = `${state.wizard.x++}px`;
  if(!state.isGameOver){
  window.requestAnimationFrame(newFrame);
  }
}

const startElement = document.querySelector(".game-start");
startElement.addEventListener("click", (e) => {
  e.currentTarget.classList.add("hidden");

  factory.createWizard(state.wizard);
  window.requestAnimationFrame(newFrame);
});

// init game
