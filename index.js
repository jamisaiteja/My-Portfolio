const sections = document.querySelectorAll("section");
const nava = document.querySelectorAll("nav .collapse div a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            console.log(scrollY)
            current = section.getAttribute("id");
        }
    });

    nava.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
            a.classList.add("active");
        }
    });
});



// ------------------
// Form
// ------------------

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector("#sub").value = "Sending..";
    let data = new FormData(form);
    fetch(
        "https://script.google.com/macros/s/AKfycbw2zqXksryaqaWmye4qMZpeFiQUGKRdRdxgvfbM8tJcyyMRS8CLlucJIjWggx8E_9-D/exec",
        {
        method: "POST",
        body: data
        }
    )
    .then((res) => res.text())
    .then((data) => {
        console.log(data);
        document.querySelector("#msg").innerHTML = data;
        document.querySelector("#sub").value = "Submit";
    });
});