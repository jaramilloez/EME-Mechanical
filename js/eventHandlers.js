let navNum = document.getElementById("navNum")
let navPhone = document.getElementById("navPhone");
navPhone.addEventListener("click", function() {
    navNum.classList.toggle('active');
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
}