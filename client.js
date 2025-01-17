$(document).ready(readyNow);

const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

for (let emp of employees) {
  console.log(emp);
}

console.log("--- start of singleEmp function ---");

function singleEmp(empObj) {
  let bonus = bonusCalculation(empObj);

  let newEmpObj = {
    name: empObj.name,
    bonusPercentage: bonus,
    totalCompensation:
      Number(empObj.annualSalary) +
      Math.round(bonus * Number(empObj.annualSalary)),
    totalBonus: Math.round(bonus * Number(empObj.annualSalary)),
  };
  return newEmpObj;
}
//END singleEmp function

//console.log(singleEmp(employees[2]));
// TEST to see if employee object is targetted

function bonusCalculation(empObj) {
  let bonus = 0;
  // var to store the calculated bonus for certain employee
  if (empObj.reviewRating <= 2) {
    bonus = 0;
  }
  if (empObj.reviewRating === 3) {
    bonus = 0.04;
  }
  if (empObj.reviewRating === 4) {
    bonus = 0.06;
  }
  if (empObj.reviewRating === 5) {
    bonus = 0.1;
  }
  // reviewRating conditionals
  if (empObj.employeeNumber.length === 4) {
    bonus += 0.05;
  }
  // employeeNumber conditional
  if (empObj.annualSalary > 65000) {
    bonus -= 0.01;
  }
  // annualSalary conditional
  if (bonus > 0.13) {
    bonus = 0.13;
  }
  if (bonus < 0) {
    bonus = 0;
  }
  // max and min bonus conditional
  return bonus;
}
// END bonusCalculation function

//console.log(bonusCalculation(employees[2]));

function readyNow() {
  $(`#moneyButton`).on(`click`, displayEmployee);
}

function displayEmployee() {
  for (let i = 0; i < employees.length; i++) {
    console.log(singleEmp(employees[i]));

    //   $(`#employeeList`).append(
    //     `<li>
    //       ${employees[i].name} ${employees[i].bonusPercentage} ${employees[i].totalCompensation} ${employees[i].totalBonus}
    //     </li>`
    //   );
  }
}
