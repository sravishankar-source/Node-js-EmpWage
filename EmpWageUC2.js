//UC2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_PART_TIME = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
empcheck = Math.floor(Math.random() * 10) % 3;
switch (empcheck) {
    case empHrs = IS_PART_TIME: 

    empHrs = FULL_TIME_HOURS;
break;
case IS_FULL_TIME:
    empHrs = FULL_TIME_HOURS;
    break;
    default:
        empHrs = 0; empHrs = 4
}
let empwage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empwage);