let p = [];
let n = 30;
let t = 0;
let whatSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  for (let i = 0; i < n; i++) {
    p.push([
      random(width), random(height),
      random(TWO_PI), random(0.5, 3),
      random(TWO_PI), 0
    ]);
  }
}

function draw() {
  fill(0, 6);
  noStroke();
  rect(0, 0, width, height);

  t++;

  for (let i = 0; i < n; i++) {
    p[i][0] += cos(p[i][2]) * p[i][3];
    p[i][1] += sin(p[i][2]) * p[i][3];

    p[i][4] += p[i][3] * 0.002;
    p[i][5] += 0.01;

    let nearCount = 0;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      let d = dist(p[i][0], p[i][1], p[j][0], p[j][1]);
      if (d < 120) {
        p[i][2] += (p[j][2] - p[i][2]) * 0.003;
        nearCount++;
      }
    }

    whatSize = 20 + sin(p[i][4]) * p[i][5] * 8;

    stroke(
      p[i][2] * 57.29 % 360,
      50 + nearCount * 15,
      80,
      12 + p[i][5] * 2
    );
    colorMode(HSB, 360, 100, 100, 100);
    noFill();

    push();
    translate(p[i][0], p[i][1]);
    rotate(p[i][4]);

    beginShape();
    let sides = 3 + floor(p[i][5] * 2);
    for (let s = 0; s <= sides; s++) {
      let a = (s / sides) * TWO_PI;
      let r = whatSize + sin(a * nearCount) * p[i][5] * 3;
      vertex(cos(a) * r, sin(a + p[i][2]) * r);
    }
    endShape();
    pop();

    if (p[i][0] < -whatSize) p[i][0] = width + whatSize * (random() > 0.5 ? 1 : -random());
    if (p[i][0] > width + whatSize) p[i][0] = -whatSize;
    if (p[i][1] < -whatSize) p[i][1] = height + whatSize;
    if (p[i][1] > height + whatSize) p[i][1] = -whatSize;

    p[i][3] *= 1.0 - p[i][5] * 0.0003;

    if (t % 400 === 0) {
      p[i][2] += p[i][5];
    }
  }

  if (t % 300 === 0 && t > 0) {
    let a = floor(random(n));
    let b = floor(random(n));
    let tmp = p[a][5];
    p[a][5] = p[b][5];
    p[b][5] = tmp;
    p[a][2] = p[b][4];
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
