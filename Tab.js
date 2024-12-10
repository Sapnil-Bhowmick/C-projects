const contentsectionElement = document.getElementById("content-section")
const contentDiv = Array.from(document.getElementById("contentDiv").children)
const ButtonList = Array.from(document.getElementById("btn-container").children)
const imageElement = document.getElementById("tab-image")

console.log(contentDiv)



// ------------ Event Listeners -----------------

contentsectionElement?.addEventListener("click", function (e) {


    // when button is clicked then only perform operation
    if (e.target.nodeName === "BUTTON") {
        const selectedBtn = e.target.id

        // ----- To change image -------
        if(selectedBtn === "history"){
            imageElement.setAttribute("src" , "./images/history.jpg")
        }
        else if(selectedBtn === "vision"){
            imageElement.setAttribute("src" , "./images/vision.jpg")
        }
        else{
            imageElement.setAttribute("src" , "./images/goal.jpg")
        }
        // ------ ** ---------------------

        contentDiv.forEach((item) => {
            item.classList.remove("active-content")
            if (item.getAttribute("id") === selectedBtn) {
                item.classList.add("active-content")
            }


            // console.log(item.getAttribute("id"))
        })

        if (e.target.nodeName === "BUTTON") {
            ButtonList.forEach((item) => {
                item.classList.remove("active-tab")
                if (item.getAttribute("id") === selectedBtn) {
                    item.classList.add("active-tab")
                }

            })
        }
    }


})