import * as PIXI from 'pixi.js';
import getSize from './getSize';

export default class Application extends PIXI.Application {
  constructor(options = {}) {
    const canvas = document.getElementById('canvas');
    const [width, height] = getSize('16:9');

    super({
      antialias: true,
      backgroundColor: 0xffffff,
      resolution: 1,
      width,
      height,
      view: canvas,
      ...options,
    });

    // app.renderer.autoResize = true; // ?
  }
}
