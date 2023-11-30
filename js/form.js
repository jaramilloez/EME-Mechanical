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