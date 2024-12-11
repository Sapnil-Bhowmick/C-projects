const FAQ_DATA = [
    {
        "id": 1,
        "question": "What is AI?",
        "answer": "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines that are programmed to think and learn."
    },
    {
        "id": 2,
        "question": "Who discovered penicillin?",
        "answer": "Alexander Fleming."
    },
    {
        "id": 3,
        "question": "Explain photosynthesis.",
        "answer": "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water. It typically involves chlorophyll and generates oxygen as a byproduct."
    },
    {
        "id": 4,
        "question": "What is 2+2?",
        "answer": "4."
    },
    {
        "id": 5,
        "question": "What causes seasons on Earth?",
        "answer": "Seasons are caused by the tilt of Earth's rotational axis away or toward the Sun as it travels through its year-long orbit."
    },
    {
        "id": 6,
        "question": "Define gravity.",
        "answer": "Gravity is the force by which a planet or other body draws objects toward its center."
    },
    {
        "id": 7,
        "question": "Name the smallest bone in the human body.",
        "answer": "The stapes bone in the middle ear."
    },
    {
        "id": 8,
        "question": "What is the chemical formula for water?",
        "answer": "H2O."
    },
    {
        "id": 9,
        "question": "Who painted the Mona Lisa?",
        "answer": "Leonardo da Vinci, one of the most renowned artists of the Renaissance period, painted the Mona Lisa."
    },
    {
        "id": 10,
        "question": "How does a microwave work?",
        "answer": "Microwaves heat food by causing water molecules in the food to vibrate rapidly, producing heat through friction."
    }
]


const cardContainer = document.querySelector(".card-container")
//   const buttons = document.querySelector(".card-container .FAQ-card .btn-container")
console.log(cardContainer)


// generating html and adding in dom
FAQ_DATA.forEach((item) => {
    const FAQ = document.createElement("div")
    FAQ.classList.add("FAQ-card")
    FAQ.setAttribute("id", item.id)

    const FAQ_question = document.createElement("div")
    FAQ_question.classList.add("FAQ-question")

    const span = document.createElement("span")
    span.innerText = item.question

    const btnContainer = document.createElement("div")
    btnContainer.classList.add("btn-container")

    const btnPlus = document.createElement("button")
    btnPlus.classList.add("btn-active")
    btnPlus.innerText = "+"
    btnPlus.addEventListener("click", () => {
        selectFAQ(item.id)
    })

    const btnMinus = document.createElement("button")
    btnMinus.innerText = "-"
    btnMinus.addEventListener("click", () => {
        selectFAQ(item.id)
    })

    btnContainer.appendChild(btnPlus)
    btnContainer.appendChild(btnMinus)

    FAQ_question.appendChild(span)
    FAQ_question.appendChild(btnContainer)

    const FAQ_answer = document.createElement("div")
    FAQ_answer.classList.add("FAQ-answer")

    const p = document.createElement("p")
    p.innerText = item.answer
    FAQ_answer.appendChild(p)

    FAQ.appendChild(FAQ_question)
    FAQ.appendChild(FAQ_answer)

    cardContainer.appendChild(FAQ)
})




function selectFAQ(id) {

    // show answer of the specific selected element
    const arr = Array.from(document.querySelector(".FAQ-Section > .card-container").children)
    const selectedFAQ = arr.filter((item) => parseInt(item.getAttribute("id")) === id)
    selectedFAQ[0].querySelector(".FAQ-answer").classList.toggle("active-FAQ")

    const buttons = selectedFAQ[0].querySelector(".btn-container").children
    buttons[0].classList.toggle("btn-active")
    buttons[1].classList.toggle("btn-active")






    // & If dont want to open 1 FAQ at a time then ignore the below logic

    // LOGIC for opening 1 FAQ at a time.
    // Logic for keeping 1 BUTTON "-" at a time

    const activeFAQs = arr.filter((item) => {
        if (parseInt(item.getAttribute("id")) !== id && item.getElementsByClassName("FAQ-answer")[0].classList.contains("active-FAQ")) {
            return true
        }
    })


    activeFAQs.forEach((item) => item.getElementsByClassName("FAQ-answer")[0].classList.remove("active-FAQ"))
    activeFAQs.forEach((item) => {
        const buttons = item.getElementsByClassName("btn-container")[0].children
        buttons[0].classList.toggle("btn-active")
        buttons[1].classList.toggle("btn-active")
    })
}



