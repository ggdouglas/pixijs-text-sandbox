import * as PIXI from 'pixi.js';
import marioSprite from './images/mario.png';

const root = document.getElementById('root');

let app = new PIXI.Application({
  antialias: true,
  backgroundColor: 0x9193f8,
  resolution: 1,
});

app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

const container = new PIXI.Container();
app.stage.addChild(container);

const texture = PIXI.Texture.from(marioSprite);
const mario = new PIXI.Sprite(texture);

container.addChild(mario);

container.x = app.screen.width / 2;
container.y = app.screen.height / 2;
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

app.ticker.add((delta) => {
  container.rotation -= 0.01 * delta;
});

root.appendChild(app.view);
