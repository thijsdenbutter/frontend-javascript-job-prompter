

/*
console.log(departments);

console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers");

console.log(" Marketing is een leuke afdeling om te werken. " + departments.marketing.description + ".");

console.log(`De afdeling Customer Service heeft ${departments["customer-service"].numberOfEmployees} medewerkers`)

console.log(`Sales is een uitdagende afdeling om te werken als Verkoopmanager. ${departments.sales.description}`)

*/
const userInputDepartment = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service].');

switch (userInputDepartment) {
    case 'marketing':
    case 'sales':
    case 'customer-service':
        console.log(`Je koos ${userInputDepartment}. ${departments[userInputDepartment].description}`);
        console.log(`${userInputDepartment} is een leuke afdeling om te werken. Er werken op dit moment ${departments[userInputDepartment].numberOfEmployees} medewerkers.`)
        break;
    default:
        console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.');
        document.getElementById('error-message').textContent = 'Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.';
}

/*
    if (userInput === 'marketing'){
        console.log(`Je koos marketing. ${departments.marketing.description}`);
    } else if (userInput === 'sales'){
        console.log(`Je koos sales. ${departments.sales.description}`);
    } else if (userInput === 'customer-service'){
        console.log(`Je koos customer-service. ${departments['customer-service'].description}`);
    } else {
        console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.');
    }

 */

// opdracht 3

const userInputJobNumber = prompt(`Je koos ${userInputDepartment}. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in. \n` +
    `0: ${departments[userInputDepartment].jobs[0].title}, \n` +
    `1: ${departments[userInputDepartment].jobs[1].title}, \n` +
    `2: ${departments[userInputDepartment].jobs[2].title}, \n` +
    `3: ${departments[userInputDepartment].jobs[3].title}`);


switch (userInputJobNumber) {
    case '0':
    case '1':
    case '2':
    case '3':
        console.log(`Je koos ${userInputJobNumber}: ${departments[userInputDepartment].jobs[userInputJobNumber].title}. Een uitdagende rol! ${departments[userInputDepartment].jobs[userInputJobNumber].description}`);
        document.getElementById('role-title').textContent = departments[userInputDepartment].jobs[userInputJobNumber].title;
        document.getElementById('department-description').textContent = departments[userInputDepartment].description;
        document.getElementById('role-description').textContent = departments[userInputDepartment].jobs[userInputJobNumber].description;

        break;
    default:
        console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.');
        document.getElementById('error-message').textContent = 'Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.';

}


// document.getElementById('role-title').textContent = 'banaan!';
// document.getElementById('role-description').textContent = '2 bananen!';