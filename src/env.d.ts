/// <reference types="astro/client" />

declare global {
  var originalImageData: ImageData | undefined;
  var canvasContext: CanvasRenderingContext2D;
}

export {};
