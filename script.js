const form = document.querySelector("form");
form.addEventListener("submit", function (event)
{
    const requiredFields = document.querySelectorAll("input[required]");
    let valid = true;
    for (let i = 0; i < requiredFields.length; i++){
        if (!requiredFields[i].value) {
            valid = false;
            break;
        }
    }
    if (!valid){
        alert("PLease fill in all required fields.");
        event.preventDefault()
    }
});