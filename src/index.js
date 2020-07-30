import * as PIXI from 'pixi.js';
import Application from './Application';
import Text from './Text';
import getSize from './getSize';

let app = new Application();

let prompt = 'The quick brown fox jumps over the lazy dog.';

const text = new Text(app, prompt);

app.stage.addChild(text.getText());

const buttons = document.querySelectorAll('.btn');
const range = document.querySelector('.range');
const textarea = document.querySelector('.textarea');

buttons.forEach((element) => {
  element.addEventListener('click', (event) => {
    const { ratio } = event.target.dataset;
    const [width, height] = getSize(ratio);
    app.renderer.resize(width, height);
    text.updatePosition();
  });
});

range.addEventListener('input', (event) => {
  const fontSize = parseInt(event.target.value, 10);
  text.setFontSize(fontSize);
});

textarea.value = prompt;
textarea.addEventListener('input', (event) => {
  text.setText(event.target.value);
});

const alignmentButtons = document.querySelectorAll('.cell');

alignmentButtons.forEach((element) => {
  element.addEventListener('click', (event) => {
    const { target } = event;
    const { horizontal, vertical } = target.dataset;

    text.setHorizontalAlignment(horizontal);
    text.setVerticallignment(vertical);

    alignmentButtons.forEach((element) => {
      element.classList.remove('cell--active');
    });
    target.classList.add('cell--active');
  });
});
