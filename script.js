//your JS code here. If required

function daysOfYear(year) {
	let isleap=false

	if (year%4 ==0) {
		if (year%100 ===0) {
			return year%400 ===0? 365:366
		}
		return 366
	}
	return 365
}