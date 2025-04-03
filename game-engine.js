import { state } from "./game-state.js";
import { config } from "./game-cofig.js";
export { newFrame }; //

//game frames
function newFrame() {
  modifyWizardPosition()

  if (!state.isGameOver) {
    window.requestAnimationFrame(newFrame);
  }
}
function modifyWizardPosition(){
  const wizardElement = document.querySelector(".wizard");
  //wizard moves

  if (state.controls.KeyA) {
    wizardElement.style.left = `${state.wizard.x-=config.speed}px`;
  }
  if (state.controls.KeyD) {
    wizardElement.style.left = `${state.wizard.x+=config.speed}px`;
  }
  if (state.controls.KeyW) {
    wizardElement.style.top = `${state.wizard.y-=config.speed}px`;
  }
  if (state.controls.KeyS) {
    wizardElement.style.top = `${state.wizard.y+=config.speed}px`;
  }

}
export const engine = {
  start() {
    window.requestAnimationFrame(newFrame);
  },
};
