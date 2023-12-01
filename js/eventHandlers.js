document.getElementById("navNum").onclick = function() {
    window.href = 'tel:8017462828';
}

document.getElementById("hamburger").onclick = function() {
    let hamburgerMenu = document.getElementById("hamburgerMenu");
    hamburgerMenu.classList.toggle('active');
}

document.getElementById("toTop").onclick = function() {
    window.scrollTo(0, 0);
};

let resumeBtn = document.getElementById("resumeBtn");
let resume = document.getElementById("resume")
resumeBtn.addEventListener("click", function() {
    resume.innerHTML = `<input type=file id="resumeIn">`;
}, false);