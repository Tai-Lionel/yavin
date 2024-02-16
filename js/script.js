document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg");
        navbar.classList.add("bg-white");
    } else {
        navbar.classList.remove("shadow-lg");
        navbar.classList.remove("bg-white");
    }
})

function runNumber(element) {
    const number = parseInt(element.getAttribute('data-number'));
    for (let i = 1; i <= number; i++) {
        setTimeout(() => {
            element.textContent = i;
        }, 10 * i)
    }
}

document.querySelectorAll(".rising-up").forEach((element) => {
    runNumber(element);
})