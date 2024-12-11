const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];


const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

leftBtn.addEventListener("click", () => Slide("left"))
rightBtn.addEventListener("click", () => Slide("right"))

let activeCardId = 2

reviews.forEach((item) => {
  const reviewCard = document.createElement("div")
  reviewCard.setAttribute("id", item.id)

  // add "Inactive-card" to hide all cards except the active card
  reviewCard.classList.add("card", item.id !== activeCardId && "Inactive-card")

  reviewCard.innerHTML =
    `<div class="img-main">
          <div class="img-container">
              <img src=${item.img} alt="Image" />
          </div>
      </div>

        <h4 class="title">${item.name}</h4>
        <h4 class="occupation">${item.job}</h4>
        <p>${item.text}</p>
    `

  const cardContainer = document.getElementById("main-div")
  cardContainer?.appendChild(reviewCard)
})


// Click logic
function Slide(action) {
  if (action === "left") {
    rightBtn.disabled = false
    if (activeCardId > 1) {
      activeCardId--
      // disable logic
      if (diableBtn(activeCardId)){
        leftBtn.disabled = true
        console.log("left disable")
      }
      setActiveCard(activeCardId)
    }
  }

  if (action === "right") {
    leftBtn.disabled = false
    if (activeCardId < reviews.length) {
      activeCardId++
      // disable logic
      if (diableBtn(activeCardId)){
        rightBtn.disabled = true
        console.log("right disable")
      }
      setActiveCard(activeCardId)
    }

  }
}



function setActiveCard(id) {

  const cardList = Array.from(document.getElementById("main-div").children).filter((item) => item.classList.contains("card"))
  // console.log(cardList)

  // the active card only do no have the "Inactive-card" class hence add it 
  cardList.forEach((item) => {
    if(!item.classList.contains("Inactive-card")){
      item.classList.add("Inactive-card")
    }

  // Remove the "Inactive-card" class from the current active card
    if(parseInt(item.getAttribute("id")) === id){
      item.classList.remove("Inactive-card")
    }

  })
}


function diableBtn(id , action){
  if(id === 1 || id === reviews.length){
    return true
  }
  else{
    return false
  }
}