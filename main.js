const container = document.querySelector('.container')
const texto = document.querySelector('#texto')

const totalTime = 7500                          /* os ciclos terão 7,5 segundos no total*/ 
const breatheTime = (totalTime / 5) * 2         /*irá esperar 3 segundos*/ 
const holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation() {
    texto.innerHTML = 'Aspire!'
    container.className = 'container grow'

    setTimeout(()=>{
        texto.innerText = 'Segure A Respiração'

        setTimeout(()=>{
            texto.innerText = 'Respire'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime) 
}

setInterval(breatheAnimation, totalTime) /* will run it every 7,5 seconds */ 