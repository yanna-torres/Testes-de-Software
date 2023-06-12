
var assert = require('assert')

var calculateSalary = require('../js/salary.js')


describe("Calculate Salary reduction", () => {

    context("Developer", () => {

        context("should reduce 20% if salary greater than or equal to 3000.0", () => {

            it("should return 2400.0 for salary equal to 3000.0", function () {
                assert.equal(calculateSalary("developer", 3000), 2400)
            })

            it("should return 3200.0 for salary equal to 4000.0", function () {
                assert.equal(calculateSalary("developer", 4000), 3200)
            })

        })

        context("should reduce 10% if salary less then 3000.0", () => {

            it("should return 2610.0 for salary equal to 2900.0", function () {
                assert.equal(calculateSalary("developer", 2900), 2610)
            })

            it("should return 900.0 for salary equal to 1000.0", function () {
                assert.equal(calculateSalary("developer", 1000), 900)
            })

        })

    })

    context("DBA", () => {

        context("should reduce 25% if salary greater than or equal to 2000.0", () => {

            it("should return 1500.0 for salary equal to 2000.0", function () {
                assert.equal(calculateSalary("DBA", 2000), 1500)
            })

            it("should return 3750.0 for salary equal to 5000.0", function () {
                assert.equal(calculateSalary("DBA", 5000), 3750)
            })

        })

        context("should reduce 15% if salary less then 2000.0", () => {

            it("should return 1615.0 for salary equal to 1900.0", function () {
                assert.equal(calculateSalary("DBA", 1900), 1615)
            })

            it("should return 850.0 for salary equal to 1000.0", function () {
                assert.equal(calculateSalary("DBA", 1000), 850)
            })

        })

    })

    context("Tester", () => {

        context("should reduce 25% if salary greater than or equal to 2000.0", () => {

            it("should return 1500.0 for salary equal to 2000.0", function () {
                assert.equal(calculateSalary("Tester", 2000), 1500)
            })

            it("should return 3750.0 for salary equal to 5000.0", function () {
                assert.equal(calculateSalary("Tester", 5000), 3750)
            })

        })

        context("should reduce 15% if salary less then 2000.0", () => {

            it("should return 1615.0 for salary equal to 1900.0", function () {
                assert.equal(calculateSalary("Tester", 1900), 1615)
            })

            it("should return 850.0 for salary equal to 1000.0", function () {
                assert.equal(calculateSalary("Tester", 1000), 850)
            })

        })
        
    })

    context("Manager", () => {

        context("should reduce 30% if salary greater than or equal to 5000.0", () => {

            it("should return 3500.0 for salary equal to 5000.0", function () {
                assert.equal(calculateSalary("Manager", 5000), 3500)
            })

            it("should return 7000.0 for salary equal to 10000.0", function () {
                assert.equal(calculateSalary("Manager", 10000), 7000)
            })

        })

        context("should reduce 20% if salary less then 5000.0", () => {

            it("should return 3920.0 for salary equal to 4900.0", function () {
                assert.equal(calculateSalary("Manager", 4900), 3920)
            })

            it("should return 1600.0 for salary equal to 2000.0", function () {
                assert.equal(calculateSalary("Manager", 2000), 1600)
            })

        })
        
    })

    context("Wrong Entries", () => {

        context("Wrong entries of employees", () => {

            it("should raise an exception for a a type of employee that doesn't exist", () => {
                assert.throws(() => calculateSalary("Analyst", 2000.0), Error, "InvalidJobRoleException");
            })
    
            it("should raise an exception for an empty entry of employee", () => {
                assert.throws(() => calculateSalary("", 2000.0), Error, "InvalidJobRoleException");
            })
            
            it("should raise an exception for a entry with a number", () => {
                assert.throws(() => calculateSalary(0, 2000.0), Error, "InvalidJobRoleException");
            })
            
        })

        context("Wrong entries of salary", () => {

            it("should raise an exception for a salary equal to 0.0", () => {
                assert.throws(() => calculateSalary("Developer", 0), Error, "InvalidSalaryException");
            })
    
            it("should raise an exception for a negative salary", () => {
                assert.throws(() => calculateSalary("Developer", -5000.0), Error, "InvalidSalaryException");
            })
        
            it("should raise an exception for a salary with text", () => {
                assert.throws(() => calculateSalary("Developer", "0"), Error, "InvalidSalaryException");
            })
        
            it("should raise an exception for an empty salary", () => {
                assert.throws(() => calculateSalary("Developer"), Error, "InvalidSalaryException");
            })
            
        })

    })
})