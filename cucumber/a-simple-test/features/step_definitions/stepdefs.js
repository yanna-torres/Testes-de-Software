const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function calculateNetSalary(position, base) {
    if (base <= 0) {
        throw new Error('InvalidSalaryException: Salary must be a positive value');
    }

    if (typeof base != typeof 10.0) {
        throw new Error('InvalidSalaryException: Salary must be a number');
    }

    if (position.toLowerCase() == "developer") {
        if (base >= 3000) {
            return base*0.8;
        } else {
            return base*0.9;
        }
    } else if (position.toLowerCase() == "dba") {
        if (base >= 2000) {
            return base*0.75;
        } else {
            return base*0.85;
        }
    } else if (position.toLowerCase() == "tester") {
        if (base >= 2000) {
            return base*0.75;
        } else {
            return base*0.85;
        }
    } else if (position.toLowerCase() == "manager") {
        if (base >= 5000) {
            return base*0.7;
        } else {
            return base*0.8;
        }
    } else {
    throw new Error('InvalidJobRoleException: Invalid job role. It must be "Developer", "DBA", "Tester" or "Manager"');
    }
  }

  Given('{string} base salary is {float}', function (role, salary) {
    this.position = role
    this.base = salary;
  });

  When('I ask their net salary', function () {
    this.actualAnswer = calculateNetSalary(this.position, this.base);
  });

  Then('I should be told it is {float}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});