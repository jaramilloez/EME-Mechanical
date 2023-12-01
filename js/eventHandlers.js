document.getElementById("navNum").onclick = function() {
    window.href = 'tel:8017462828';
};

document.getElementById("hamburger").onclick = function() {
    let hamburgerMenu = document.getElementById("hamburgerMenu");
    hamburgerMenu.classList.toggle('active');
};

document.getElementById("toTop").onclick = function() {
    window.scrollTo(0, 0);
};

document.getElementById('resumeBtn').onclick = function() {
    let resume = document.getElementById("resume")
    resume.innerHTML = `<input type=file id="resumeIn">`;
};

document.getElementById("submit").onclick = function() {
    let inquiryForm = document.getElementById("inquiryForm");
    let elements = inquiryForm.elements;
    let formFilled = true;
    for (let i = 0; i < elements.length; i++){
        let element = elements[i];
        if(element.required && element.value.trim() === ''){
            formFilled = false;
            break;
        }
    }
    if(formFilled){
        alert("Thank you");
    }
};