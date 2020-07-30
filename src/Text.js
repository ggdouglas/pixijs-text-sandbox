import * as PIXI from 'pixi.js';
import take from 'lodash/take';

export default class Text {
  horizontal = 'center';

  vertical = 'middle';

  constructor(app, string = '') {
    this.app = app;
    this.string = string;
    this.text = new PIXI.Text(string, { fontSize: 26, wordWrap: true });

    this.updatePosition();
  }

  setText(string) {
    this.text.text = string;
    this.string = string;
    this.updateText();
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
    this.text.text = take(textMetrics.lines, maxLines).join('\n');
  }

  setFontSize(fontSize) {
    this.text.style.fontSize = fontSize;
    this.updateText();
  }

  setHorizontalAlignment(horizontal) {
    this.horizontal = horizontal;
    this.updatePosition();
  }

  setVerticallignment(vertical) {
    this.vertical = vertical;
    this.updatePosition();
  }

  updatePosition() {
    if (this.horizontal === 'left') {
      this.text.anchor.x = 0;
      this.text.x = 0;
    }
    if (this.horizontal === 'center') {
      this.text.anchor.x = 0.5;
      this.text.x = this.app.screen.width / 2;
    }
    if (this.horizontal === 'right') {
      this.text.anchor.x = 1;
      this.text.x = this.app.screen.width;
    }

    this.text.style.align = this.horizontal;

    if (this.vertical === 'top') {
      this.text.anchor.y = 0;
      this.text.y = 0;
    }
    if (this.vertical === 'middle') {
      this.text.anchor.y = 0.5;
      this.text.y = this.app.screen.height / 2;
    }
    if (this.vertical === 'bottom') {
      this.text.anchor.y = 1;
      this.text.y = this.app.screen.height;
    }

    this.text.style.wordWrapWidth = this.app.screen.width;

    this.updateText();
  }
}
