window.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const salaryInput = document.querySelector("#salary");
    const salaryOutput = document.querySelector("#salaryOutput");
    const nameInput = document.querySelector('input[type="text"]');
    const dateInput = document.querySelector('input[type="date"]');

    salaryOutput.textContent = salaryInput.value;
    salaryInput.addEventListener("input", () => {
        salaryOutput.textContent = salaryInput.value;
    });

    nameInput.addEventListener("input", () => {
        const regex = /^[A-Z][a-z]{2,}( [A-Z][a-z]{2,})?$/;
        nameInput.style.border =
            regex.test(nameInput.value) ? "2px solid green" : "2px solid red";
    });

    dateInput.addEventListener("change", () => {
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        dateInput.style.border =
            selectedDate <= today ? "2px solid green" : "2px solid red";
    });
});



form.addEventListener("submit", function (event) {
    event.preventDefault();

    try {
        const employee = new EmployeePayroll();

        employee.name = nameInput.value;
        employee.salary = salaryInput.value;
        employee.gender =
            document.querySelector('input[name="gender"]:checked')?.value || "";

        employee.department = [...document.querySelectorAll('.dept-group input:checked')]
            .map(cb => cb.parentElement.textContent.trim());

        employee.startDate = dateInput.value;
        employee.notes = document.querySelectorAll('input[type="text"]')[1].value;

        displayEmployee(employee);
        saveToLocalStorage(employee);

    } catch (e) {
        alert(e.message);
    }
});



function displayEmployee(emp) {
    document.querySelector(".result-section").innerHTML = `
        <h3>Employee Details</h3>
        <p>Name: ${emp.name}</p>
        <p>Gender: ${emp.gender}</p>
        <p>Department: ${emp.department.join(", ")}</p>
        <p>Salary: ${emp.salary}</p>
        <p>Start Date: ${emp.startDate}</p>
        <p>Notes: ${emp.notes}</p>
    `;
}

