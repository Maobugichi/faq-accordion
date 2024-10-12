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
 if (item.src.includes("/assets/images/icon-plus.svg")) {
    accordionContent[index].classList.add("block")
    item.setAttribute("src",imgsrc)
    } else {
    accordionContent[index].classList.remove("block")
    item.setAttribute("src", plusrc)
    console.log(container.clientHeight)
    }
    if (container.clientHeight <= 440) {
        main.style.height = "130vh"
    }
}
