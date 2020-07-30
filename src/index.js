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

const horizontalAlignButtons = document.querySelectorAll('[data-align^="h"]');
const verticalAlignButtons = document.querySelectorAll('[data-align^="v"]');

horizontalAlignButtons.forEach((element) => {
  element.addEventListener('click', (event) => {
    const { target } = event;
    const horizontal = target.dataset.align.split('-')[1];

    text.setHorizontalAlignment(horizontal);

    horizontalAlignButtons.forEach((element) => {
      element.classList.remove('alignment-button--active');
    });
    target.classList.add('alignment-button--active');
  });
});

verticalAlignButtons.forEach((element) => {
  element.addEventListener('click', (event) => {
    const { target } = event;
    const vertical = event.target.dataset.align.split('-')[1];

    text.setVerticallignment(vertical);

    verticalAlignButtons.forEach((element) => {
      element.classList.remove('alignment-button--active');
    });
    target.classList.add('alignment-button--active');
  });
});
