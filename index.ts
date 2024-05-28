/*** ARRAY ASSIGNMENT 2***/

//Question : 01

//You are tasked with creating a Product Invetory System.Implement function and logic to manage
//object manipulating effectively

//1.Define type alias named Product to represent a product with the following properties:
//name(string) , price(number) , inventory(object) which is containing inventory details including:
//stock(number) , colorOption(string[])

//2.Create an array named products containing at leat three product object.Each product object should include a
//name , price , and inventory details.

//3.Implement a function named changeColor that takes a product object and a new color as input.This function
//should update the color property of the product and adjust the price based on the new color(implement your own logic 
// e.g. increase 10% by red,decrease by 5% by blue).

//4.Display each product name ,price ,stock , and available color.iterate through the products array and print products details.

type Product = {
    name: string
    price:number;
    inventory: {
        stock:number;
        color:string;
        changeColor:(newColor:string)=>void
    };
       }

let products:Product[] = [
    {
        name: "shirts",
        price: 2500,
        inventory: {
          stock: 15,
          color: "blue",
          changeColor:(newColor:string)=>{
            products[2].inventory.color = newColor;
            if (newColor=="black" || "Black") {
              console.log(`the price will be ${products[0].price*0.10}`);
            }
            else if (newColor=="red" || "Red") {
              console.log(`the price will be ${products[0].price*0.06}`);
            } 
            else if (newColor=="blue" || "Blue") {
              console.log(`the price will be ${products[0].price*0.04}`);
            }  
            else{
              console.log(`this color is not available`);
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
          changeColor:(newColor:string)=>{
            products[2].inventory.color = newColor;
            if (newColor=="black" || "Black") {
              console.log(`the price will be ${products[1].price*0.10}`);
            }
            else if (newColor=="white" || "White") {
              console.log(`the price will be ${products[1].price*0.06}`);
            } 
            else if (newColor=="gray" || "Gray") {
              console.log(`the price will be ${products[1].price*0.04}`);
            } 
            else{
              console.log(`this color is not available`);
              
            }
            
          }
        },

    },
    {   name: "Bags",
    price: 1500,
    inventory: {
      stock: 6,
      color: "green",
      changeColor:(newColor:string)=>{
        products[2].inventory.color = newColor;
        if (newColor=="black" || "Black") {
          console.log(`The price will be ${products[2].price*0.10}`);
        }
        else if (newColor=="white" || "White") {
          console.log(`The price will be ${products[2].price*0.06}`);
        } 
        else if (newColor=="Blue" || "blue") {
          console.log(`The price will be ${products[2].price*0.04}`);
        } 
        else{
          console.log(`This color is not available`);
          
        }
        
      }
    },
}
]

for (let a = 0; a <=products.length; a++) {
 if (a==0){
  console.log(products[0]);
  console.log(products[0].inventory.changeColor("black"));

}

 else if (a==1) {
  console.log(products[1]);
  let result2 = products[a].inventory.changeColor("White");
  console.log(result2);}

 else if(a==2) {
  console.log(products[2]);
  let result3= products[a].inventory.changeColor("red");
  console.log(result3);
}
else{
  console.log(" ");
  
}
}




/***** Question : 02 *****/

//You are task with creating a student grading system.Implement functions and logic to manage student grades effectively.
//1. Define a typescript type alias named Student to represent a student with the following properties:
//name(string) , grades(number[])
//2.create an array named students conataining at least three student objects.Each student object should include a 
//name and an array of grades.
//3.Implement a function named calculateAverageGrade that takes a student grades as input and returns the average 
//grade for the student.
//4.Display each student name and average grade.Iterate through the students array.Calculate the average grade for each
//student using the calculateAverageGrade function,and print their name and average grade.

type Student = {
    name:string;
    grades:number[];
  }
  
  let  students:Student[] = [
    {
      name:"Alina",
      grades:[40,55,70],
    },
    {
      name:"Rutaba",
      grades:[75,80,85],
    },
    {
      name:"Maheen",
      grades:[70,85,90],
    }
  ]
  
  function calculateAverageGrade(grades:number[]){
    const sum = grades.reduce((acc,current)=> acc + current , 0);
    return sum/grades.length;
  }
  
  students.forEach((students)=>{
    const averageGrade = calculateAverageGrade(students.grades);
    console.log(`Name: ${students.name}`);
    console.log(`Average grade: ${averageGrade.toFixed(2)}`);
     console.log();
  
  })



/***Question : 03 ***/

//You are managing employee salaries for a company.Implement logic to calculate salaries and handle bonuses.

//1.Define a type alias named Employee with the following properties:
//name(string) , hourseWorked(number) , hourlyRate(number) , salary(number)

//2.Define an array named employee containing employee object.Each object shoulr include a name,hourseWorked,hourlyRate,salary
//3.Implement a function named calculateSalary that calculates the salary for each employee based on the hourse worked and hourly rate.
//4.If an employee has worked 20 hourseor more,apply a 10% bonus to their salary.

type Employee = {
    name:string;
    hourseWorked:number;
    hourlyRate:number;
    salary:number;
  }
  
  let employee:Employee[] = [
    {
      name:"Ali",
      hourseWorked:18,
      hourlyRate:25,
      salary: 20000,
    },
    {
      name:"Raza",
      hourseWorked:20,
      hourlyRate:28,
      salary:35000,
    },
     {
      name:"Anas",
      hourseWorked:22,
      hourlyRate:32,
      salary:40000,
    }
  ]
  
  function calculateSalary(employee) {
      const baseSalary = employee.salary;
      const hourlyWage = employee.hourlyRate * employee.hoursWorked;
      let Salary= hourlyWage * 0.10;
          if (hourlyWage>=20) {
              console.log(Salary);
          }
          else {
            return   baseSalary
              
          }    
      }
  
  employee.forEach((employee)=>{
      const salary = calculateSalary(employee);
      console.log(`Name: ${employee.name}`);
      console.log(`Salary ${calculateSalary(employee)}`);
      console.log();
  }) 
  

