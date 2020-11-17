function Developer(name) {
    this.name = name;
    this.type = "Developer"
}

function Tester(name) {
    this.name = name;
    this.type = "Tester"
}


function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
        }
    }
}

const employeeFactory = new EmployeeFactory();
const employees = []

employees.push(employeeFactory.create("Patrick", 1))
employees.push(employeeFactory.create("John", 2))


function displayID(){
    console.log(`${this.name} - ${this.type}`)
}

employees.forEach(emp => displayID.call(emp))
