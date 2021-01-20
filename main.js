
var gameEngine = new GameEngine();
var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./bird.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');
	
	gameEngine.init(ctx);
	gameEngine.addEntity(new Bird(gameEngine));
	gameEngine.start();
});
