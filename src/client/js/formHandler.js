import { validate } from "./validator";

/**
 * @description function that handles the form submit event, prevents the default event, validates the input and updates the dom with proper output
 * @param {Event} event 
 * @returns 
 */
function handleSubmit(event) {
    event.preventDefault()

    let rInput = document.querySelector("#myText");
    let sMyText = rInput?.value || "";

    if (!validate(sMyText)) {
        rInput.classList.add("error")
        alert("Enter a valid input...");
        return;
    };

    rInput.classList.remove("error");

    let rOutputText = document.querySelector(".outputText");
    let rPolarity = document.querySelector(".polarity");
    let rSubjectivity = document.querySelector(".subjectivity");
    rOutputText.textContent = 'Fetching data'
    rPolarity.textContent = 'Fetching data'
    rSubjectivity.textContent = 'Fetching data'

    fetch("http://localhost:8081/analyze", {
        body: JSON.stringify({ text: sMyText }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(async oData => {
        let result = await oData.json();

        if (!Object.keys(result).length) {
            let sErrorText = "Error Fetching Data";
            alert(sErrorText);
            rOutputText.textContent = "";
            rPolarity.textContent = "";
            rSubjectivity.textContent = "";
            return;
        }

        rOutputText.textContent = sMyText;
        rPolarity.textContent = result.score_tag;
        rSubjectivity.textContent = result.subjectivity
    }, err => {
        let sErrorText = "Error Fetching Data";
        alert(sErrorText);
        rOutputText.textContent = "";
        rPolarity.textContent = "";
        rSubjectivity.textContent = "";
    })

}

export { handleSubmit }
