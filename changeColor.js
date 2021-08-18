var Rnum = 128;
var Gnum = 128;
var Bnum = 128;
var sq;

function setup() {
    sq = createSprite(200, 200, 20, 20);
    sq.shapeColor = "white";
    createCanvas(400, 400);

}

function draw() {
    background(Rnum,Gnum,Bnum);
    if(keyDown(DOWN_ARROW)) {
        sq.y = sq.y + 1;
        Rnum --;
      }
      if(keyDown(UP_ARROW)) {
        sq.y = sq.y - 1;
        Rnum ++;
      }
      if(keyDown(LEFT_ARROW)) {
        sq.x = sq.x - 1;
        Gnum --;
      }
      if(keyDown(RIGHT_ARROW)) {
        sq.x = sq.x + 1;
        Gnum ++;
      }
      if(keyDown("A")) {
        sq.rotation = sq.rotation - 1;
        Bnum --;
      }
      if(keyDown("Z")) {
        sq.rotation = sq.rotation + 1;
        Bnum ++;
      }
    drawSprites();
}
