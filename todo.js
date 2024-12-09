
const taskContainer = document.getElementById("task-container")
const taskInput = document.getElementById("task-input")
const addBtn = document.getElementById("add")

// ---------------- Variables -----------------------

let Task_inputValue
let H3_inputValue






// ---------------- Event Listeners -----------------------

taskInput.addEventListener("input" , (e) => {
    Task_inputValue = e.target.value
    // console.log(Task_inputValue)
})


addBtn.addEventListener("click" , function(){

    const myTaskDiv = createTask(Task_inputValue)
    taskContainer.append(myTaskDiv)

    taskInput.value = ""
    // console.log(myTaskDiv)
})

console.log(createTask("TEST TASK"))










// ---------------- Helper Functions -----------------------


let index = 0

function createTask(val) {
    let taskDiv = document.createElement("div")
    taskDiv.className = "task"

    let leftDiv = document.createElement("div")
    leftDiv.className = "left"
    
    const strikeThroughBtn = document.createElement("button")
    strikeThroughBtn.className = "strike-through-btn"

    let h3Element = document.createElement("h3")
    h3Element.innerText = val

    leftDiv.appendChild(strikeThroughBtn)
    leftDiv.appendChild(h3Element)

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "X"
    deleteBtn.className = "delete"

    deleteBtn.addEventListener("click" , () => {
        taskContainer.removeChild(taskDiv)
        // console.log("clicked")
    })

    strikeThroughBtn.addEventListener("click" , () => {
        strikeThroughBtn.innerText = strikeThroughBtn.innerText === "" ? "✓" : ""
        strikeThroughBtn.classList.toggle("strikeThroughBtn-bgcolor")
        h3Element.classList.toggle("crossOff")
        // console.log(strikeThroughBtn.innerText)
    })

    h3Element.addEventListener("dblclick" , () => {

        let editInputVal = h3Element.innerText

        const div = document.createElement("div")
        div.classList.add("editDiv")

        const input = document.createElement("input")
        input.setAttribute("type" , "text")
        input.classList.add("editInput")
        input.value = h3Element.innerText

        input.addEventListener("input" , (e) => {
            editInputVal = e.target.value
        })


        const saveBtn = document.createElement("button")
        saveBtn.classList.add("saveBtn")
        saveBtn.innerText = "Save"

        saveBtn.addEventListener("click" , () => {
            h3Element.innerText = editInputVal
            div.replaceWith(h3Element)
            // console.log(h3Element)
        })

        div.appendChild(input)
        div.appendChild(saveBtn)


        h3Element.replaceWith(div)
        // console.log(input)
    })

    taskDiv.appendChild(leftDiv)
    taskDiv.appendChild(deleteBtn)

    return taskDiv
}

