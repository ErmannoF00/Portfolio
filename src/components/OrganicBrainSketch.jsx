import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import brainImage from "../assets/images/Neuro1.jpg";
import "../styles/BrainSketch.css";

const Sketch = (p5) => {
  let img;
  let scaleFactor = 1;
  let opacity = 255;
  let pulseUp = true;
  let dots = [];

  p5.setup = () => {
    const canvas = p5.createCanvas(1200, 600);
    canvas.parent("brain-pic");
    p5.imageMode(p5.CENTER);
    p5.noStroke();
    img = p5.loadImage(brainImage);

    for (let i = 0; i < 100; i++) {
      dots.push({
        x: p5.random(p5.width),
        y: p5.random(p5.height),
        size: p5.random(0.5, 2),
        alpha: p5.random(100, 255),
        inc: p5.random(0.5, 1.5)
      });
    }
  };

  p5.draw = () => {
    p5.clear();
    p5.background(10, 25, 47, 120);

    // background glowing dots
    p5.fill(100, 255, 218);
    dots.forEach((dot) => {
      dot.alpha += dot.inc;
      if (dot.alpha > 255 || dot.alpha < 100) dot.inc *= -1;
      p5.fill(100, 255, 218, dot.alpha);
      p5.circle(dot.x, dot.y, dot.size);
    });

    if (!img || !img.width) return;

    // Pulse animation
    if (pulseUp) {
      scaleFactor += 0.002;
      opacity += 0.5;
      if (scaleFactor > 1.05) pulseUp = false;
    } else {
      scaleFactor -= 0.002;
      opacity -= 0.5;
      if (scaleFactor < 0.95) pulseUp = true;
    }

    // draw brain image scaled
    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);
    p5.scale(scaleFactor);
    p5.tint(255, opacity);
    const imgWidth = 1000;
    const imgHeight = (imgWidth * img.height) / img.width;
    p5.image(img, 0, 0, imgWidth, imgHeight);
    p5.pop();

    // scanlines
    p5.stroke(100, 255, 218, 60);
    for (let y = 0; y < p5.height; y += 10) {
      p5.line(0, y, p5.width, y);
    }
  };
};

const BrainPic = () => (
  <div id="brain-pic">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default BrainPic;
