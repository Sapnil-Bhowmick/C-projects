const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },

    {
        id: 10,
        title: "Steak Barbeque",
        category: "Dinner",
        price: 23.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];


const MenuCardContainer = document.querySelector(".menu-section > .menuContainer")
const btnContainer = document.querySelector(".menu-section > .btn-container")
const search = document.querySelector(".search")

console.log(search)

document.addEventListener("DOMContentLoaded", () => {

    displayMenuCards(menu)

    // After all the menu data is fetched and rendered in dom then only attach event listener to input
    searchMenu()

    displayButtons()

    console.log("DOM loaded")
})




function searchMenu() {
    search.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {

            const searchValue = e.target.value.toLowerCase().trim()

            // If anything is typed then filter else return all menu items
            if (searchValue) {
                const searchedMenu = menu.filter((menuItem) => {
                    if (menuItem.title.toLowerCase().includes(searchValue)) {
                        return menuItem
                    }
                })

                console.log('searched value', searchValue)
                displayMenuCards(searchedMenu)
            }
            else{
                displayMenuCards(menu)
                console.log("You didnt search anything")
            }

        }
    })
}


function displayButtons() {


    // generating unique categories
    const categoryArr = menu.reduce((acc, item) => {

        if (!acc.includes(item.category)) {
            acc.push(item.category)
        }

        return acc

    }, ["all"])



    // mapping categories to filter buttons
    let btnArr = categoryArr.map((item) => {

        return (
            `
            <button data-id=${item}>${item}</button>
            `
        )
    })

    btnArr = btnArr.join("")

    btnContainer.innerHTML = btnArr


    // Filter logic after the buttons are rendered into DOM
    filterCategory()
}


function filterCategory() {

    const filterBtnList = btnContainer.childNodes

    filterBtnList.forEach((item) => {
        item.addEventListener("click", (e) => {

            const category = e.currentTarget.dataset.id

            const filteredMenuArr = menu.filter((menuItem) => {
                if (menuItem.category === category) {
                    return menuItem
                }
            })

            if (category !== "all") {
                displayMenuCards(filteredMenuArr)
            }
            else {
                displayMenuCards(menu)
            }
            console.log(filteredMenuArr)
        })
    })



}


function displayMenuCards(menuArr) {

    let menuCardArr = menuArr.map((item) => {

        return (
            `
            <div class="menuWrapper">
                <article class="menuCard">
                    <div class="img-container">
                        <img src=${item.img} alt="Test Image" />
                    </div>

                    <div class="content-container">
                        <div class="titleDiv">
                            <h3 class="title">${item.title}</h3>
                            <span class="price">$${item.price}</span>
                        </div>

                        <div>
                            <p>${item.desc}</p>
                        </div>
                    </div>
                </article>
            </div>
            `
        )
    })

    menuCardArr = menuCardArr.join("")

    MenuCardContainer.innerHTML = menuCardArr

}