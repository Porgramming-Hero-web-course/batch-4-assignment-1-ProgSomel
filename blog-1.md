In TypeScript, union types and intersection types are powerful features that allow developers to define more complex and flexible types by combining other types. These features are especially useful when you want to express scenarios where a value can be one of several types (union), or where a value must meet multiple type constraints simultaneously (intersection).

## 1. **Union Type(`|`):**

A union type allows to have several types. It gives flexbility when the value can be differen types.
If we declare the tye as union. We can use multiple types like: number or string

const printNumber = (number:string | number):void {
    console.log(`The number is: ${number}`);
}
printNumber(12);
printNumber('12');

We can call the above function with a number or a string value. It give us flexibility to use multiple types to call that function.


### 2. **Intersection Types(`&`)**:

Intersection type is like and. Both values have to be true. We can combine multiple values to one value;
combining different types to create a new type.

interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
  position: string;
}

type EmployeeProfile = Person & Employee;

const employee: EmployeeProfile = {
  name: "Alice",
  age: 30,
  employeeId: "E123",
  position: "Software Developer"
};

console.log(employee);


Here EmployProfile is an intersection type of Person and Employee.
The Employee object must have all the properties from Person and Employee.
Thus using the intersection type we can combine multiple types into one type. 
