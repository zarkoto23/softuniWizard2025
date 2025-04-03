import { state } from "./game-state.js";
export { newFrame }; //

//game frames
function newFrame() {
  const wizardElement = document.querySelector(".wizard");
  //wizard moves

  if (state.controls.KeyA) {
    wizardElement.style.left = `${state.wizard.x--}px`;
  }
  if (state.controls.KeyD) {
    wizardElement.style.left = `${state.wizard.x++}px`;
  }
  if (state.controls.KeyW) {
    wizardElement.style.top = `${state.wizard.y--}px`;
  }
  if (state.controls.KeyS) {
    wizardElement.style.top = `${state.wizard.y++}px`;
  }

  if (!state.isGameOver) {
    window.requestAnimationFrame(newFrame);
  }
}

export const engine = {
  start() {
    window.requestAnimationFrame(newFrame);
  },
};
