import { state } from "./game-state.js";
export {newFrame}//

//game frames
function newFrame() {
  const wizardElement = document.querySelector(".wizard");

  //wizard moves
  wizardElement.style.left = `${state.wizard.x++}px`;

  if (!state.isGameOver) {
    window.requestAnimationFrame(newFrame);
  }
}

export const engine={
  start(){
    window.requestAnimationFrame(newFrame);

    
  }
}