// // const a = window.location.hash;
// // console.log(a);

const sections = document.querySelectorAll("section");
const nava = document.querySelectorAll("nav .collapse div a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        console.log(sectionTop)
        const sectionHeight = section.clientHeight;
        console.log(sectionHeight)
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    console.log(current)

    nava.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
            a.classList.add("active");
        }
    });
});
