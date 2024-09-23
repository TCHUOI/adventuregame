var cam = {
    x: player.x - canvas.width/2,
    y: player.y - canvas.height/2,
};
function setting() {
  // desert boime
  fill(200, 150, 60);
  rect(-19500 - cam.x, -8000 - cam.y, 15000, 16000);
  fill(200, 150, 60, 0.3);
  rect(-4500 - cam.x, -8000 - cam.y, 50, 16000);
  rect(-4500 - cam.x, -8000 - cam.y, 100, 16000);
  rect(-4500 - cam.x, -8000 - cam.y, 150, 16000); 
  rect(-19550 - cam.x, -8000 - cam.y, 50, 16000);
  rect(-19600 - cam.x, -8000 - cam.y, 100, 16000);
  rect(-19650 - cam.x, -8000 - cam.y, 150, 16000); 
  rect(-19550 - cam.x, -8050 - cam.y, 15100, 50);
  rect(-19600 - cam.x, -8100 - cam.y, 15200, 100);
  rect(-19650 - cam.x, -8150 - cam.y, 15300, 150); 
  rect(-19550 - cam.x, 8000 - cam.y, 15100, 50);
  rect(-19600 - cam.x, 8000 - cam.y, 15200, 100);
  rect(-19650 - cam.x, 8000 - cam.y, 15300, 150); 
  // forest boime
  fill(4, 117, 0);
  rect(-4500 - cam.x, -25000 - cam.y, 15000, 16000);
  fill(4, 117, 0, 0.3);
  rect(11500 - cam.x, -25000 - cam.y, 50, 16000);
  rect(11500 - cam.x, -25000 - cam.y, 100, 16000);
  rect(11500 - cam.x, -25000 - cam.y, 150, 16000); 
  rect(-4550 - cam.x, -25000 - cam.y, 50, 16000);
  rect(-4600 - cam.x, -25000 - cam.y, 100, 16000);
  rect(-4650 - cam.x, -25000 - cam.y, 150, 16000); 
  rect(-4550 - cam.x, -25050 - cam.y, 15100, 50);
  rect(-4600 - cam.x, -25100 - cam.y, 15200, 100);
  rect(-4650 - cam.x, -25150 - cam.y, 15300, 150); 
  rect(-4550 - cam.x, -9000 - cam.y, 15100, 50);
  rect(-4600 - cam.x, -9000 - cam.y, 15200, 100);
  rect(-4650 - cam.x, -9000 - cam.y, 15300, 150); 
  // snow biome
  fill(200, 200, 200);
  rect(2650 - cam.x, -8000 - cam.y, 15000, 16000);
  fill(200, 200, 200, 0.3);
  rect(2600 - cam.x, -8000 - cam.y, 50, 16000);
  rect(2550 - cam.x, -8000 - cam.y, 100, 16000);
  rect(2500 - cam.x, -8000 - cam.y, 150, 16000); 
  rect(17650 - cam.x, -8000 - cam.y, 50, 16000);
  rect(17650 - cam.x, -8000 - cam.y, 100, 16000);
  rect(17650 - cam.x, -8000 - cam.y, 150, 16000); 
  rect(2600 - cam.x, -8050 - cam.y, 15100, 50);
  rect(2550 - cam.x, -8100 - cam.y, 15200, 100);
  rect(2500 - cam.x, -8150 - cam.y, 15300, 150); 
  rect(2600 - cam.x, 8000 - cam.y, 15100, 50);
  rect(2550 - cam.x, 8000 - cam.y, 15200, 100);
  rect(2500 - cam.x, 8000 - cam.y, 15300, 150); 
  // molten boime
  fill(204, 117, 0);
  rect(-4500 - cam.x, 25000 - cam.y, 15000, 16000);
  fill(204, 117, 0, 0.3);
  rect(11500 - cam.x, 25000 - cam.y, 50, 16000);
  rect(11500 - cam.x, 25000 - cam.y, 100, 16000);
  rect(11500 - cam.x, 25000 - cam.y, 150, 16000); 
  rect(-4550 - cam.x, 25000 - cam.y, 50, 16000);
  rect(-4600 - cam.x, 25000 - cam.y, 100, 16000);
  rect(-4650 - cam.x, 25000 - cam.y, 150, 16000); 
  rect(-4550 - cam.x, 25050 - cam.y, 15100, 50);
  rect(-4600 - cam.x, 25100 - cam.y, 15200, 100);
  rect(-4650 - cam.x, 25150 - cam.y, 15300, 150); 
  rect(-4550 - cam.x, 9000 - cam.y, 15100, 50);
  rect(-4600 - cam.x, 9000 - cam.y, 15200, 100);
  rect(-4650 - cam.x, 9000 - cam.y, 15300, 150); 
  fill(0, 110, 0)
  stroke(0, 110,0);
  strokeWeight(5);
  for(var i = 0; i < grass.length; i+=1) {
      rect(grass[i][0] - cam.x, grass[i][1] - cam.y, 5, 15);
      line(grass[i][0] - cam.x + 2.5, grass[i][1] - cam.y + 15, grass[i][0] - cam.x - 10, grass[i][1] - cam.y + 3);
      line(grass[i][0] - cam.x + 2.5, grass[i][1] - cam.y + 15, grass[i][0] - cam.x + 15, grass[i][1] - cam.y + 3);
      if(grass[i][0] - cam.x < -25) {
          grass[i][0] = cam.x + canvas.width + random(0, 20);
      } else if(grass[i][0] - cam.x > canvas.width + 25) {
          grass[i][0] = cam.x - random(0, 20);
      }
      if(grass[i][1] - cam.y < -25) {
          grass[i][1] = cam.y + canvas.height + random(0, 20);
      } else if(grass[i][1] - cam.y > canvas.height + 25) {
          grass[i][1] = cam.y - random(0, 20);
      }
  }
};
