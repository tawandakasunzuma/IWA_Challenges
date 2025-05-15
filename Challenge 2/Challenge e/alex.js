export const alex = {
    firstName: "Alex",
    surname: "Naidoo",
    role: "Head of Marketing"
}

const display = alex.firstName + " " + alex.surname + " (" + alex.role + ")"
document.querySelector('#alex').innerText = display