(function start() {
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function simulateMouse(x, y) {
        const element = document.elementFromPoint(x, y)

        const click = new PointerEvent('pointerdown', {
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y
        })

        if (element) {
            element.dispatchEvent(click)
            console.log(`clicking at x: ${x}, y: ${y}`)
        }
    }

    async function start() {
        const delay = getRandomNumber(250, 1000) //atur delay disini 250 = minimal, 500 - max
        const x = getRandomNumber(600, 920)
        const y = getRandomNumber(130, 490)
        await simulateMouse(x, y)
        setTimeout(start, delay)
        console.log(`time between click: ${delay}`)
    }

    start()
})()
