export const nwabisa = {
    firstName: "Nwabisa",
    surname: "Gabe",
    role: "CEO"
}

const display = nwabisa.firstName + " " + nwabisa.surname + " (" + nwabisa.role + ")"
document.querySelector('#nwabisa').innerText = display
