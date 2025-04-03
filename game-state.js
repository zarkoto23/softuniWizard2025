//initialization game state

export const state = {
  player: "Navcho",
  wizard: {
    x: 100,
    y: 100,
    width: 75,
    height: 75,
    lastMagicUse:0,
    coolDown:500,
  },
  isGameOver: false,
  score: 0,
  controls: {
    KeyA: false,
    KeyS: false,
    KeyD: false,
    KeyW: false,
    Space: false,
  },
  lastBugSpawn:0,
  maxBugSpawnTime:2000,
 

};
