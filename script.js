const horas = document.getElementById(`horas`)
const minutos = document.getElementById(`minutos`)
const segundos = document.getElementById(`segundos`)

const hoursHand = document.querySelector(".hand.hours")
const minutesHand = document.querySelector(".hand.minutes")
const secondsHand = document.querySelector(".hand.seconds")



const relogio01 = setInterval(function time(){
    let dateToday = new Date()
    let hour = dateToday.getHours()
    let minute = dateToday.getMinutes()
    let seg = dateToday.getSeconds()

    if (hour < 10) hour = `0` + hour
    if (minute < 10) minute = `0` + minute
    if (seg < 10) seg = `0` + seg

    horas.textContent = hour
    minutos.textContent = minute
    segundos.textContent=seg
    
    if(hour > 5 && hour < 12){
        document.body.style.background = `#2BA0A6`
        
    }else if ( hour < 18){
        document.body.style.background =`#DB3300`
        
    }else if (hour > 18){
        document.body.style.background= `#222A5C`
    }
})

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360);
}

const setrelogio = () => {
    const dateToday = new Date();

    const secondsPercentage = dateToday.getSeconds() / 60;
    const minutesPercentage = (secondsPercentage + dateToday.getMinutes()) /60;
    const hoursPercentage = (minutesPercentage + dateToday.getHours()) / 12;

   setRotation(secondsHand, secondsPercentage);
   setRotation(minutesHand, minutesPercentage);
   setRotation(hoursHand, hoursPercentage);
};

setrelogio();

setInterval(setrelogio, 1000);