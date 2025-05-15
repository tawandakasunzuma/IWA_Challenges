export const johannes = {
    firstName: "Johannes",
    surname: "Potgieter",
    role: "Intern"
}

const display = johannes.firstName + " " + johannes.surname + " (" + johannes.role + ")"
document.querySelector('#johannes').innerText = display
