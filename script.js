let mode = document.querySelector("#mode")
let color = "light"
let body = document.querySelector("body")

mode.addEventListener("click",()=>{
    if(color==="light"){
        color="dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        color="light"
        body.classList.add("light")
        body.classList.remove("dark")
    }

    
})