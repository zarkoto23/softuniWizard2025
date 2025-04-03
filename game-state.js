//initialization game state

export const state = {
  player: "Navcho",
  wizard: {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
  },
  isGameOver: false,
  points: 0,
  controls: {
    KeyA: false,
    KeyS: false,
    KeyD: false,
    KeyW: false,
    Space: false,
  },
};
