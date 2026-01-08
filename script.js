window.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const salaryInput = document.querySelector("#salary");
    const salaryOutput = document.querySelector("#salaryOutput");
    const nameInput = document.querySelector('input[type="text"]');
    const dateInput = document.querySelector('input[type="date"]');

    // Salary range display
    salaryOutput.textContent = salaryInput.value;
    salaryInput.addEventListener("input", () => {
        salaryOutput.textContent = salaryInput.value;
    });

    // Name validation
    nameInput.addEventListener("input", () => {
        const regex = /^[A-Z][a-z]{2,}( [A-Z][a-z]{2,})?$/;
        nameInput.style.border =
            regex.test(nameInput.value) ? "2px solid green" : "2px solid red";
    });

    // Date validation
    dateInput.addEventListener("change", () => {
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        dateInput.style.border =
            selectedDate <= today ? "2px solid green" : "2px solid red";
    });
});
