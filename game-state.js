//initialization game state

export const state = {
  player: "Navcho",
  wizard: {
    x: 100,
    y: 100,
    width: 75,
    height: 75,
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
};
