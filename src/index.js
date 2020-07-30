import * as PIXI from 'pixi.js';

const canvas = document.getElementById('canvas');

function getSize(ratio) {
  if (ratio === '16:9') {
    return [640, 360];
  }
  if (ratio === '9:16') {
    return [360, 640];
  }
  if (ratio === '1:1') {
    return [640, 640];
  }
}

const [width, height] = getSize('16:9');
const fontSize = 26;

let app = new PIXI.Application({
  antialias: true,
  backgroundColor: 0xffffff,
  resolution: 1,
  width,
  height,
  view: canvas,
});

app.renderer.autoResize = true;

const style = new PIXI.TextStyle({
  fontSize,
  wordWrap: true,
  wordWrapWidth: width,
  align: 'center',
});

const text = new PIXI.Text(
  'The quick brown fox jumps over the lazy dog.',
  style
);
text.anchor.x = 0.5;
text.anchor.y = 0.5;
text.x = width / 2;
text.y = height / 2;

app.stage.addChild(text);

document.querySelectorAll('.btn').forEach((item) => {
  item.addEventListener('click', (event) => {
    const { ratio } = event.target.dataset;

    const [width, height] = getSize(ratio);
    app.renderer.resize(width, height);
    text.x = width / 2;
    text.y = height / 2;
    text.style.wordWrapWidth = width;
  });
});

document.querySelectorAll('.range').forEach((item) => {
  item.addEventListener('input', (event) => {
    const fontSize = event.target.value;
    text.style.fontSize = `${fontSize}px`;
  });
});
