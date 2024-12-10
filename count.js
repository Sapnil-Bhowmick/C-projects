const giveawayTextElement = document.getElementById("giveaway-text")
const timerBoxContainerElement = document.getElementById("box-container")
const timeElements = document.querySelectorAll(".timer-box-container > div > h3")


// console.log(timerBoxContainerElement)


const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];




// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
// const futureExpiryDate = new Date(2024, 11, 12, 15, 23, 20)
const futureExpiryDate = new Date(2025, 0, 10, 19, 37, 10)
const year = futureExpiryDate.getFullYear()
const day = Days[futureExpiryDate.getDay()]
const month = Months[futureExpiryDate.getMonth()]
const date = futureExpiryDate.getDate()
const hour = futureExpiryDate.getHours()
const minuetes = futureExpiryDate.getMinutes()
const seconds = futureExpiryDate.getSeconds()

giveawayTextElement.innerText = `Give away ends on ${day}, ${date} ${month} ${year} ${helperText(hour)}:${helperText(minuetes)}${hour < 12 ? "am" : "pm"}`

// get value in milliseconds
const expiryTime = futureExpiryDate.getTime()
// console.log(expiryTime)


function getRemainningTime() {
    const today = new Date().getTime()
    const timeDiff = expiryTime - today

    if(timeDiff <= 0){
        clearInterval(timerId)
        console.log("cleared")
        timerBoxContainerElement.innerHTML = "<h2 class='expiredText'>Sorry this deal has expired !</h2>"

        return
    }

    const oneSecond = 1000
    const oneMinuete = 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneDay = 24 * 60 * 60 * 1000

    const remainningDays = Math.floor(timeDiff / oneDay)
    const remainningHours = Math.floor((timeDiff % oneDay) / oneHour)
    const remainningMinuetes = Math.floor((timeDiff % oneHour) / oneMinuete)
    const remainningSeconds = Math.floor((timeDiff % oneMinuete) / oneSecond)

    const arr = [remainningDays , remainningHours , remainningMinuetes , remainningSeconds]

    timeElements.forEach((item , index) => {
        item.innerText = helperText(arr[index])
    }) 

}

const timerId = setInterval(getRemainningTime , 1000)


function helperText(val){
    if(val < 10){
        return `0${val}`
    }
    else {
        return val
    }
}