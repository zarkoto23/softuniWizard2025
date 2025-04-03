import { state } from "./game-state.js";
import { config } from "./game-cofig.js";
import{factory} from "./game-objects.js"
export { newFrame }; //


const gameScore=document.querySelector('.game-score')
const gameArea=document.querySelector('.game-area')

//game frames
function newFrame() {
  //move wizard
  modifyWizardPosition()

  //wizard fire movement
  const fireballs=document.querySelectorAll('.fireball')
  for(const fireball of fireballs){
    if(fireball.offsetLeft>gameArea.offsetWidth){
      fireball.remove()
    } else{
    fireball.style.left=fireball.offsetLeft+config.magicSpeed+'px'

    }
  }

  //create bugs
  if(state.lastBugSpawn+state.maxBugSpawnTime*Math.random()>Date.now()){
  factory.createBug()
  state.lastBugSpawn=Date.now()
  }

  //move bugs

  const bugs=document.querySelectorAll('.bug')
  bugs.forEach(bug=>{
    bug.style.left=bug.offsetLeft-config.bugSpeed+'px'
  })

  //aplly score
  state.score+=config.timePoints;
  gameScore.textContent='Точки:'+state.score

  if (!state.isGameOver) {
    window.requestAnimationFrame(newFrame);
  }
}
// TODO: Fix accelerration on diagonals
function modifyWizardPosition(){
  const wizardElement = document.querySelector(".wizard");
  const {wizard} =state
  //wizard moves

  if (state.controls.KeyA&&wizard.x>0) {
    wizardElement.style.left = `${wizard.x-=config.speed}px`;
  }
  if (state.controls.KeyD&&(wizard.x+wizard.width)<gameArea.offsetWidth) {
    wizardElement.style.left = `${wizard.x+=config.speed}px`;
  }
  if (state.controls.KeyW&&wizard.y>0) {
    wizardElement.style.top = `${wizard.y-=config.speed}px`;
  }
  if (state.controls.KeyS&&wizard.y+wizard.height<gameArea.offsetHeight) {
    wizardElement.style.top = `${wizard.y+=config.speed}px`;
  }

  if(state.controls.Space){
    wizardElement.style.backgroundImage='url("images/wizard-fire.png")'
      //create fireball
      factory.createFireball(wizard)
  }else{
    wizardElement.style.backgroundImage='url("images/wizard.png")'
  }

}
export const engine = {
  start() {
    window.requestAnimationFrame(newFrame);
  },
};
