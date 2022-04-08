class Lives {

    constructor(ctx, posX, posY) {
        this.ctx = ctx
        this.platformPos = { x: posX, y: posY }

        this.livesSize = { w: 35, h: 35 }
        this.livesPos = { x: posX + 600 - this.livesSize.w, y: posY - this.livesSize.h - 7.5 }

        this.init()
    }

    init() {
        this.livesInstance = new Image()
        this.livesInstance.src = "./img/heart.png"
    }

    draw() {
        this.ctx.drawImage(
            this.livesInstance,
            this.livesPos.x,
            this.livesPos.y,
            this.livesSize.w,
            this.livesSize.h
        )

        // if (this.frameCounter % 10 === 0) {
        //     this.lives1.livesSize.w *= 2
        //     this.lives1.livesSize.h *= 2
        // }
    }

}