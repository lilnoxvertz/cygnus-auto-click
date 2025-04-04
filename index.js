(function start() {

    const targetElement = document.querySelectorAll(".bg-100")

    if(!targetElement) {
        console.log("target not found")
        return
    }
    
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
        const delay = getRandomNumber(250, 1000) //atur delay disini 250 - minimal, 500 - max
        
        const getTargetCord = targetElement[1].getBoundingClientRect()
        const x = getTargetCord.left + Math.random() * getTargetCord.width
        const y = getTargetCord.top + Math.random() * getTargetCord.height
        
        await simulateMouse(x, y)
        setTimeout(start, delay)
        console.log(`time between click: ${delay}`)
    }

    start()
})()
