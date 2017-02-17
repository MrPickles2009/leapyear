/*
1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
4. The year is a leap year (it has 366 days).
5. The year is not a leap year (it has 365 days)
*/
function leapyear(year) {
	//var year = window.prompt("Which year are you testing for?");
	var year = 2015;

	if (year%4 != 0) {
		console.log("The year " + year + " is not a leap year.")
	} else {
		if (year%100 != 0) {
			console.log("The year " + year + " is not a leap year.")
		} else {
			if (year%400 == 0) {
				console.log("The year " + year + " is a leap year!")
			} else {
				console.log("The year " + year + " is not a leap year.")
			}
		}
	}
}
