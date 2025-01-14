// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let n=0;

// Collect employee data
const collectEmployees = function () {
  let addMore  = true;
  const employees = [];
  while (addMore == true) {


    const firstName = prompt("Enter firstname: "); 
    const lastName = prompt("Enter lastname: ");
    let salary = parseFloat(prompt("Enter salary: "));
        

    salary = isNaN(salary) ? 0 : Number(salary);

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employees.push(employee);
 
    addMore = confirm("Do you want to add another employer?");
  // TODO: Get user input to create and return an array of employee objects


  }
  return employees;
}



// Display the average salary
const displayAverageSalary = function (employeesArray) {

   let total = 0;
   const numberOfEmployees = employeesArray.length

    employeesArray.forEach(employee => {
      total += employee.salary;
    });
    let averageSalary = parseFloat((total / numberOfEmployees));




  console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalary.toFixed(2)}`);
  return averageSalary;

  // TODO: Calculate and display the average salary
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const selectedEmployee = employeesArray[randomIndex]
  console.log(`Congratulations to ${selectedEmployee.firstName} ${selectedEmployee.lastName}, our random drawing winner!`);
    
  return selectedEmployee; // Optionally return the selected employee
};



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);

};

// Add event listener to 'Add Employees' button

addEmployeesBtn.addEventListener('click', trackEmployeeData);

