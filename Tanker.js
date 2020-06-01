class Tanker {
  constructor(x, y, width, height) {
    this.image = loadImage("./assets/tank.jpg");
      var options = {
      isStatic: true
     }
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

      image(this.body.position.x, this.body.position.y, 50, 50);

    };
}
