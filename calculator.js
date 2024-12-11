const display = document.getElementById("display-area")

function handleClick(val) {
    display.value = display.value + val
}

function handleClickOperator(val) {
    display.value = display.value + " " + val + " "
}


// We can also use pop for more efficiency
function handleDelete() {
    let valArray = [...display.value.trim()]

    // js is dynamically typed hence can assighn any type
    valArray = valArray.splice(0, valArray.length - 1).join("").trim()

    display.value = valArray
    console.log(valArray)
}

function handleReset() {
    if (display.classList.contains("error")) display.classList.remove('error')
    display.value = "0"
}

function handleEvaluate() {
    const valWithoutSpaces = removeSpaces(display.value)

    try {
        display.value = window.eval(removeLeftMostZero(valWithoutSpaces))
    }
    catch {
        display.value = "ERROR"
        display.classList.add("error")
    }
}



function removeSpaces(val) {
    return val.split(" ").join("")
}


// since a left most 0 is causing inaccurate results
function removeLeftMostZero(val) {
    val = val.split("")
    if (val[0] === "0") {
        val.shift()
    }
    /* console.log(a.join("")) */
    return val.join("")
}