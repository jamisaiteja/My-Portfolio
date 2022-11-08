const sections = document.querySelectorAll("section");
const nava = document.querySelectorAll("nav .collapse div a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            // console.log(scrollY)
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


// ------------
// Form
// ------------

function sendEmail(){
    var name=document.getElementById("name").value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phonenumber').value;
    var msg=document.getElementById('message').value;
    var body = 'Name: '+name + '<br/> Email: ' +email + '<br/> Phonenumber: '+phone
    + '<br/> Message: '+msg;
    var sub = name +"'s message from portfolio contact form!";

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jamisaiteja666@gmail.com",
        Password : "46207ED15A8729E402E72B0AC7093DEB1AD1",
        To : 'saitejajami6@gmail.com',
        From : "jamisaiteja666@gmail.com",
        Subject : sub,
        Body : body
    }).then(
        message => alert(message)
    );
}


// let url="https://script.google.com/macros/s/AKfycbxHRrGg17AqZF9iz8-SgUAJHSLrsVQg2oGdtMkuO-DXL1JzZ4LHs6sqp85nk6G9Loly/exec";
// let form = document.querySelector("#form");
//         let submit = document.querySelector("#sub");
//         let message = document.querySelector("#span");
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();
//             submit.value = "Sending.."
//             fetch(url, {
//                     method: "POST",
//                     body: new FormData(form)
//                 })
//                 .then(res => res.text())
//                 .then(data => {
//                     message.innerHTML = data;
//                     submit.value = "Send"

//                 })
//                 .catch(err => {
//                     message.innerHTML = err;
//                     submit.value = "Send"
//                 })
//         })
