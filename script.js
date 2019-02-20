// A small business wants to keep track of its employees and the computers that they use. Each employee is assigned to a department, and they each get assigned a computer when they join the company.

// Build arrays of objects that represent Employees, Departments, and Computers.
// Assign every resource a unique id property.
// Assign each employee to a department using a foreign key.
// Assign each employee a computer using a foreign key.
// Once your data is normalized, use your DOM skills to display a card for each employee. It should display the employee name, the name of their department, and which computer they are using


const employees = [
    {
        "id": 1,
        "name": "Kim",
        "departmentId": 2,
        "computersId": 1

    },
    {
        "id": 2,
        "name": "Josh",
        "departmentId": 3,
        "computersId": 2
    },
    {
        "id": 3,
        "name": "Jordan",
        "departmentId": 1,
        "computersId": 3
    },
    {
        "id": 4,
        "name": "Hoagie",
        "departmentId": 2,
        "computersId": 3
    }



]

const departments = [
    {
        "id": 1,
        "deptName": "Helpdesk"
    },
    {
        "id": 2,
        "deptName": "Kitchen"
    },
    {
        "id": 3,
        "deptName": "Game Design"
    }


]

const computers = [
    {
        "id": 1,
        "computer": "Dell 5590"
    },
    {
        "id": 2,
        "computer": "MacBook"
    },
    {
        "id": 3,
        "computer": "Google PixelBook"
    }
]



const companyDatabase = {

    "employees": "Employees",
    "dept": "Department",
    "computerId": "Computer ID"

}


// write to DOM location
const employeeOutput = document.querySelector("#employeeList");



// create string to write to the DOM - loop though employee, department and computer arrays



employees.forEach(singleEmployee => {
    let department_name = "";
    let computer_name = "";


    for (let i = 0; i < departments.length; i++) {
        if (singleEmployee.departmentId === departments[i].id) {
            department_name = departments[i].deptName
            
        }
    }

    for (let i = 0; i < computers.length; i++) {
        if (singleEmployee.computersId === computers[i].id) {
            computer_name = computers[i].computer
           
        }
    }

    employeeOutput.innerHTML += `<article class="employee">
    <header class="employee__name" ><i class="fas fa-dog highlight"></i>
        <h1>${singleEmployee.name}</h1>
    </header>
    <section class="employee__department">
        Works in the ${department_name} department.
    </section>
    <section class="employee__computer">
        Currently using a ${computer_name}
    </section>
</article>`
})




