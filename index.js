(function start() {
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const interval = getRandomNumber(250, 500)

    function simulateMouse(x, y) {
        const element = document.elementFromPoint(x, y)

        const click = new PointerEvent('pointerdown', {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: x,
            clientY: y
        })

        if (element) {
            element.dispatchEvent(click)
            console.log(`clicked ${element} at x: ${x}, y: ${y}`)
            console.log(`time between click ${interval}ms`)
        }
    }

    async function start() {
        const x = getRandomNumber(600, 920)
        const y = getRandomNumber(130, 490)

        simulateMouse(x, y)
    }

    setInterval(start, interval)
})()