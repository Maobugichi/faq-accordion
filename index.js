const plus = document.querySelectorAll(".plus");
const accordionContent = document.querySelectorAll(".accordion-details")
const imgsrc = "./assets/images/icon-minus.svg"
const plusrc = "./assets/images/icon-plus.svg"
const container = document.querySelector(".container")
const article = document.querySelector("article")
const main = document.querySelector("main")

const clickedElement = null
plus.forEach((item,index) => {
 item.addEventListener("click", () => {
    showContent(item,index)
  })
})

function showContent(item,index) {
    console.log(item.src.includes("/assets/images/icon-plus.svg"))
 if (item.src.includes("/assets/images/icon-plus.svg")) {
    console.log(container)
    
    accordionContent[index].classList.add("block")
    //clickedElement = item
    item.setAttribute("src",imgsrc)
    container.classList.add("auto")
    article.classList.add("auto")
    main.style.height = "180vh"
    } else {
    accordionContent[index].classList.remove("block")
    item.setAttribute("src", plusrc)
    console.log(container.clientHeight)
    }

    
    if (container.clientHeight <= 440) {
        container.classList.remove("auto")
        article.classList.remove("auto")
        main.style.height = "130vh"
    }
}
