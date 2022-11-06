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

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jamisaiteja666@gmail.com",
        Password : "46207ED15A8729E402E72B0AC7093DEB1AD1",
        To : 'saitejajami6@gmail.com',
        From : "jamisaiteja666@gmail.com",
        Subject : "Portfolio contact data",
        Body : body
    }).then(
        message => alert(message)
    );
}

