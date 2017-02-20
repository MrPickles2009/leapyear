var leapyear = require("../index");

describe("A program to determine if a certain year is a leap year", () => {

	it("defines a function called leapyear", () => {
		expect(leapyear).toBeDefined();
		expect(typeof leapyear).toBe("function");
	});

	it("can accept a year as an input", () => {

	});

	it("will return a value of true or false", () => {
		expect(leapyear(2017)).toBe(false);
	});

	it("will return false for non-multiples of 4", () => {

	});
});