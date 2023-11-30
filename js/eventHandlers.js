let navNum = document.getElementById("navNum")
let navPhone = document.getElementById("navPhone");
navPhone.addEventListener("click", function() {
    navNum.classList.toggle('active');
}, false);

let mobileCall = document.getElementById("mobileCall");
mobileCall.addEventListener("click", function() {
    navNumHamburger.classList.toggle('active');
}, false);

navNum.addEventListener("click", function() {
    window.location.href = 'tel:' + 8017462828;
}, false);


document.getElementById("toTop").onclick = function() {
    window.scrollTo(0, 0);
}

let resumeBtn = document.getElementById("resumeBtn");
let resume = document.getElementById("resume")
resumeBtn.addEventListener("click", function() {
    resume.innerHTML = `<input type=file id="resumeIn">`;
}, false);

let hamburger = document.getElementById("hamburger");
let hamburgerMenu = document.getElementById("hamburgerMenu");
hamburger.addEventListener("click", function() {
    hamburgerMenu.classList.toggle('active');
}, false);