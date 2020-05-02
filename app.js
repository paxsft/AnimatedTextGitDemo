function randomRGB(){
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    return `rgb(${r},${g},${b})`
}

const letters = document.querySelectorAll('.letter')
const intervalId = setInterval(function(){
    for( let letter of letters){
        letter.style.color = randomRGB()
    }
},2000)
