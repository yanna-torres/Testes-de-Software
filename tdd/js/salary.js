
module.exports = function calculateSalary(jobRole, salary) {

    if (salary <= 0) {
        throw new Error('InvalidSalaryException: Salary must be a positive value');
      }

    if (typeof salary != typeof 10.0) {
        throw new Error('InvalidSalaryException: Salary must be a number');
    }

    if (jobRole.toLowerCase() == "developer") {
        if (salary >= 3000) {
            return salary*0.8;
        } else {
            return salary*0.9;
        }
    } else if (jobRole.toLowerCase() == "dba") {
        if (salary >= 2000) {
            return salary*0.75;
        } else {
            return salary*0.85;
        }
    } else if (jobRole.toLowerCase() == "tester") {
        if (salary >= 2000) {
            return salary*0.75;
        } else {
            return salary*0.85;
        }
    } else if (jobRole.toLowerCase() == "manager") {
        if (salary >= 5000) {
            return salary*0.7;
        } else {
            return salary*0.8;
        }
    } else {
      throw new Error('InvalidJobRoleException: Invalid job role. It must be "Developer", "DBA", "Tester" or "Manager"');
    }
    
}