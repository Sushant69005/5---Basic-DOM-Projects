let randombtn = document.querySelector('.randombtn')
let colorinput = document.querySelector('#colorinput')
let applycolor = document.querySelector('.applycolor')
let currcolorvalue = document.querySelector('.currcolorvalue')
let body = document.querySelector('body')

const changecolor = (color) => {
    body.style.backgroundColor = color;
    currcolorvalue.innerHTML = color
}
const colorArray = ['red', 'blue', 'green', 'yellow', 'lightseagreen', 'cyan', 'tomato', 'lightcoral', 'acqua', 'white', 'black']

const generateRandomColor = () => {
    const randomNumber = Math.floor(Math.random() * colorArray.length)
    return colorArray[randomNumber]
}
const handlerandombtnclick = () => {
    let color = generateRandomColor();
    changecolor(color);

}
const handleapplycolorclick = () => {
    const color = (colorinput.value);
    changecolor(color);

}

randombtn.addEventListener('click', handlerandombtnclick)
applycolor.addEventListener('click', handleapplycolorclick)