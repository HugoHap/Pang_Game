class Player {

    constructor(ctx, posX, posY, width, height, gameSize) {
        this.ctx = ctx
        this.playerPos = { x: posX, y: posY }
        this.playerSize = { w: width, h: height }
        this.gameSize = { w: gameSize.w, h: gameSize.h }

        // this.characterInstance.frames = 3
        // this.characterInstance.index = 0

        this.characterInstance = undefined

        this.init()
    }



    init() {
        this.characterInstance = new Image()
        this.characterInstance.src = 'img/marciano.png'
    }

    draw() {
        this.ctx.drawImage(this.characterInstance, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
        // this.characterInstance.framesIndex
    }



    // Movement instructions
    moveLeft() {
        if (this.playerPos.x > 5) {
            this.playerPos.x -= 15
        }
    }

    moveRight() {
        if (this.playerPos.x + this.playerSize.w <= this.gameSize.w) {
            this.playerPos.x += 15
        }
    }

    moveUp() {
        this.playerPos.y -= 15
    }

    moveDown() {
        this.playerPos.y += 15
    }



    // Sprite movement
    animate(frameCounter) {
        if (frameCounter % 5 === 0) {
            this.characterInstance.frameIndex++
        }
        if (this.characterInstance.frameIndex >= this.characterInstance.frames) {
            this.characterInstance.frameIndex = 0
        }
    }

}