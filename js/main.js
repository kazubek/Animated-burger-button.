const btn =  document.querySelector(".btn")

function btnAnimation(){
    btn.classList.toggle('cross')
    console.log("work")
}
btn.addEventListener("click", btnAnimation)