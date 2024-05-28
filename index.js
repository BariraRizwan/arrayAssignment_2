/*** ARRAY ASSIGNMENT 2***/
var products = [
    {
        name: "shirts",
        price: 2500,
        inventory: {
            stock: 15,
            color: "blue",
            changeColor: function (newColor) {
                products[2].inventory.color = newColor;
                if (newColor == "black" || "Black") {
                    console.log("the price will be ".concat(products[0].price * 0.10));
                }
                else if (newColor == "red" || "Red") {
                    console.log("the price will be ".concat(products[0].price * 0.06));
                }
                else if (newColor == "blue" || "Blue") {
                    console.log("the price will be ".concat(products[0].price * 0.04));
                }
                else {
                    console.log("this color is not available");
                }
            }
        }
    },
    {
        name: "Trouzers",
        price: 2200,
        inventory: {
            stock: 12,
            color: "black",
            changeColor: function (newColor) {
                products[2].inventory.color = newColor;
                if (newColor == "black" || "Black") {
                    console.log("the price will be ".concat(products[1].price * 0.10));
                }
                else if (newColor == "white" || "White") {
                    console.log("the price will be ".concat(products[1].price * 0.06));
                }
                else if (newColor == "gray" || "Gray") {
                    console.log("the price will be ".concat(products[1].price * 0.04));
                }
                else {
                    console.log("this color is not available");
                }
            }
        },
    },
    { name: "Bags",
        price: 1500,
        inventory: {
            stock: 6,
            color: "green",
            changeColor: function (newColor) {
                products[2].inventory.color = newColor;
                if (newColor == "black" || "Black") {
                    console.log("The price will be ".concat(products[2].price * 0.10));
                }
                else if (newColor == "white" || "White") {
                    console.log("The price will be ".concat(products[2].price * 0.06));
                }
                else if (newColor == "Blue" || "blue") {
                    console.log("The price will be ".concat(products[2].price * 0.04));
                }
                else {
                    console.log("This color is not available");
                }
            }
        },
    }
];
for (var a = 0; a <= products.length; a++) {
    if (a == 0) {
        console.log(products[0]);
        console.log(products[0].inventory.changeColor("black"));
    }
    else if (a == 1) {
        console.log(products[1]);
        var result2 = products[a].inventory.changeColor("White");
        console.log(result2);
    }
    else if (a == 2) {
        console.log(products[2]);
        var result3 = products[a].inventory.changeColor("red");
        console.log(result3);
    }
    else {
        console.log(" ");
    }
}
var students = [
    {
        name: "Alina",
        grades: [40, 55, 70],
    },
    {
        name: "Rutaba",
        grades: [75, 80, 85],
    },
    {
        name: "Maheen",
        grades: [70, 85, 90],
    }
];
function calculateAverageGrade(grades) {
    var sum = grades.reduce(function (acc, current) { return acc + current; }, 0);
    return sum / grades.length;
}
students.forEach(function (students) {
    var averageGrade = calculateAverageGrade(students.grades);
    console.log("Name: ".concat(students.name));
    console.log("Average grade: ".concat(averageGrade.toFixed(2)));
    console.log();
});
var employee = [
    {
        name: "Ali",
        hourseWorked: 18,
        hourlyRate: 25,
        salary: 20000,
    },
    {
        name: "Raza",
        hourseWorked: 20,
        hourlyRate: 28,
        salary: 35000,
    },
    {
        name: "Anas",
        hourseWorked: 22,
        hourlyRate: 32,
        salary: 40000,
    }
];
function calculateSalary(employee) {
    var baseSalary = employee.salary;
    var hourlyWage = employee.hourlyRate * employee.hoursWorked;
    var Salary = hourlyWage * 0.10;
    if (hourlyWage >= 20) {
        console.log(Salary);
    }
    else {
        return baseSalary;
    }
}
employee.forEach(function (employee) {
    var salary = calculateSalary(employee);
    console.log("Name: ".concat(employee.name));
    console.log("Salary ".concat(calculateSalary(employee)));
    console.log();
});
