
const mobileButton = document.querySelector(".mobile-btn")
const menuItems = document.querySelectorAll(".mobile-btn .mobile-menus-css li")
console.log(mobileButton, menuItems)
initializeListItems()
mobileButton.addEventListener("focus", showListItems)
mobileButton.addEventListener("blur", initializeListItems)

function initializeListItems() {
    let count = 1
    for(let item of menuItems){
        item.style.visibility = "hidden"
        item.style.transition = `${0.4*count}s all ease-in`
        item.style.transform = "translateX(100%) rotate(90deg)"
        count++
    }
}

function showListItems() {
    for(let item of menuItems){
        item.style.visibility = "visible"
        item.style.transform = "translateX(0%) rotate(0deg)"
    }
}