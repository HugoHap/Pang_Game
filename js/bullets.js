class Bullets {
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.playerSize = { w: playerWidth, h: playerHeight }

        this.bulletSize = { w: 40, h: 60 }
        this.bulletPos = { x: playerPosX + playerWidth / 2 - this.bulletSize.w / 2, y: playerPosY - this.bulletSize.h }

        this.init()
    }

    init() {
        this.bulletInstance = new Image()
        this.bulletInstance.src = "./img/bullet1.png"
    }

    draw() {
        this.ctx.drawImage(
            this.bulletInstance,
            this.bulletPos.x,
            this.bulletPos.y,
            this.bulletSize.w,
            this.bulletSize.h
        )

        this.move()
    }

    move() {
        this.bulletPos.y -= 15
    }




















}