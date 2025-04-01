import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/BrainSketch.css";

const Sketch = (p5) => {
  let particles = [];
  const numParticles = 200;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: p5.width / 2,
        y: p5.height / 2,
        angle: p5.random(p5.TWO_PI),
        speed: p5.random(0.5, 2),
        radius: p5.random(0.5, 2),
        color: p5.color(p5.random(180, 255), p5.random(50, 150), p5.random(100, 200), 150),
      });
    }
    p5.noStroke();
    p5.background(10, 25, 47);
  };

  p5.draw = () => {
    p5.fill(10, 25, 47, 20);
    p5.rect(0, 0, p5.width, p5.height);

    particles.forEach((pt) => {
      pt.x += Math.cos(pt.angle) * pt.speed;
      pt.y += Math.sin(pt.angle) * pt.speed;
      pt.angle += p5.random(-0.05, 0.05);

      p5.fill(pt.color);
      p5.circle(pt.x, pt.y, pt.radius);

      if (p5.dist(p5.width / 2, p5.height / 2, pt.x, pt.y) > p5.width / 2) {
        pt.x = p5.width / 2;
        pt.y = p5.height / 2;
        pt.angle = p5.random(p5.TWO_PI);
      }
    });
  };
};

const OrganicBrainSketch = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default OrganicBrainSketch;
