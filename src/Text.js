import * as PIXI from 'pixi.js';
import take from 'lodash/take';

export default class Text {
  constructor(app, string = '') {
    this.app = app;
    this.string = string;
    this.text = new PIXI.Text(string, {
      align: 'center',
      fontSize: 26,
      wordWrap: true,
      wordWrapWidth: app.screen.width,
    });
    this.text.anchor.x = 0.5;
    this.text.anchor.y = 0.5;
    this.text.x = app.screen.width / 2;
    this.text.y = app.screen.height / 2;
  }

  getText() {
    return this.text;
  }

  updateText() {
    let textMetrics = PIXI.TextMetrics.measureText(
      this.string,
      this.text.style
    );
    const maxLines = Math.floor(
      this.app.screen.height / textMetrics.lineHeight
    );
    this.text.text = take(textMetrics.lines, maxLines).join(' ');
  }

  setFontSize(fontSize) {
    this.text.style.fontSize = fontSize;
    this.updateText();
  }

  updatePosition() {
    this.text.x = this.app.screen.width / 2;
    this.text.y = this.app.screen.height / 2;
    this.text.style.wordWrapWidth = this.app.screen.width;
  }
}
