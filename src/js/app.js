const containerBtn = document.querySelector(".container-btn")
const allBtn = document.querySelectorAll(".btn")
const hiddenInput = document.querySelector(".input-hidden")
const closeBtn = document.querySelector(".btns")
const backDrop = document.querySelector(".modal")


containerBtn.addEventListener("click", getBtnValue)


function getBtnValue(e) {
    const getBtnName = e.target
    // getBtnName.innerText = ""

    allBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            getBtnName.innerText = e.target.value
            closeBtn.style.display = "none"
            backDrop.style.display = "none"
        })
    })
}

