
class Bird {
    constructor(game) {
        this.spritesheet = ASSET_MANAGER.getAsset("./bird.png");
        
        this.x = 100;
        this.y = 100;

        this.x2 = 200;
        this.y2 = 60;
        
        this.game = game;
        this.animate1 = new Animator(this.spritesheet, 0, 95, 115, 115, 4, 0.15, 0, false, true);
        this.animate2 = new Animator(this.spritesheet, 8, 432, 115, 115, 4, 0.15, 0, false, true);
       
    }

    draw(ctx) {
        this.animate1.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        this.animate2.drawFrame(this.game.clockTick, ctx, this.x2, this.y2, 1);
    }

    update() {

    }
}