const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const counter = document.getElementById("counter");
increase.addEventListener("click", ()=>{
    counter.textContent = parseInt(counter.textContent) + 1;
});
decrease.addEventListener("click", ()=>{
    counter.textContent = parseInt(counter.textContent) - 1;
});

//# sourceMappingURL=index.44983732.js.map
