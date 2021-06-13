//UC3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
        return IS_PART_TIME_HOURS;
        case IS_FULL_TIME:
        return IS_FULL_TIME_HOURS;
        default:
        return 0;
    
    }
}
let empHrs = 0;
let empCheck = MAth.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * Wage_per_Hour;
console.log("Emp Wage: " + empWage);
