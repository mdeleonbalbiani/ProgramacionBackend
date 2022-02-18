const getNum0to255 = ()=> Math.floor(Math.random() * 256);

class Color {
    get(){
        const color = `rgb(${getNum0to255()}, ${getNum0to255()}, ${getNum0to255()})`

        return color
    }
}

const color = new Color()
console.log(color.get());