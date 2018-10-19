let yoff = 1;
let nums;

function setup() {
  createCanvas(400, 400);
  
  console.log(nums);
}

function draw() {

  let string = "Шифрование";
  let len = string.length;
  nums = new Array(256);
  for (let i = 0; i < len; i++) {
    nums[i] = string.charCodeAt(i);
  }
  for (let i = 1; i < nums.length; i++) {
    x = i % len;
    nums[i] = ((nums[i - 1] % nums[x]) + nums[x] * nums[i - 1]) % 249 + 7;
  }
  nums[0] %= 249 + 7
  
  translate(width / 2, height / 2);
  background(51);

  stroke(255);
  fill(255, 50);
  strokeWeight(1);

  let details = nums[0] * 2;

  let xoff = 0;
  beginShape();
  for (let a = 0, i = 1; a <= PI; a += PI / details) {
    let r = sin(2 * a) * map(nums[i], 1, 256, nums[1], nums[2]);
    let x = r * cos(a) * sin(yoff);
    let y = r * sin(a);
    i++;
    vertex(x, y);
  }
  vertex(0, 0);
  endShape();
  beginShape();
  for (let a = 0, i = 1; a <= PI; a += PI / details) {
    let r = sin(2 * a) * map(nums[i], 1, 256, nums[1], nums[2]);
    let x = r * cos(a) * sin(yoff);
    let y = r * sin(a);
    i++;
    vertex(-x, y);
  }
  vertex(0, 0);
  endShape();

  yoff += 0.15;
  yoff %= 2 * PI;
}
