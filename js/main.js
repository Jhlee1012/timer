const elTimer = document.querySelector('.box .timer')
const boxEl = document.querySelector('.box')
const iconEl = boxEl.querySelector('.icon')
const timerTextEl = elTimer.querySelector('p')

let second = 10
let minute = 0
let hour = 0




document.addEventListener('DOMContentLoaded', () => {

   
    const clock = setInterval(() =>{
        

        if(second<=5 && minute ==0 && hour==0){
            alert()
        }

        if(second ==0 && minute ==0 && hour==0){
            explode()
            clearInterval(clock)
        }else if(second==0 && minute==0 && hour>0){
            countHour()
        }else if(second==0 && minute>0 && hour>=0){
            countminute()
        }else{
            second--;
        }
        let digit = [hour,minute,second]
        digit.forEach((el,idx)=>{digit[idx] = doubleDigit(el)})
        elTimer.innerHTML =`<p>${digit.join(':')} 초 전</p>`

    },1000)


}

)

const countminute = ()=>{
    minute--;
    second = 5
}
const countHour = ()=>{
    hour--;
    minute = 5
    second = 5
}
const doubleDigit = (time)=>{
    if(time<10){
        time = "0"+time
    }
    return time
}
const alert = ()=>{
    iconEl.classList.add('alert')
}
const explode = ()=>{
    iconEl.classList.add('explode')
}