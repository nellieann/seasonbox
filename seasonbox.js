var body = $("body");
var input = $("input");

function append(el) {
	body.append(el.choice);
	body.append(el.months);
	body.append(el.holidays);
}

function Season(choice, months, holidays, color) {
	this.choice = "<h1>" + choice + "</h1>";
	this.months = "<h1>" + months.join(", ") + "</h1>";
	this.holidays = "<h1>" + holidays.join(", ") + "</h1>";
	this.color = body.css("background", color);
}

function printSeason(interest) {
	var season = new Season(interest[0], interest[1], interest[2], interest[3]);
	append(season);
}

var winter = [["WINTER"],["December", "January", "February"], ["Hannukah", "Ramadan", "Christmas", "Kwanza", "New Year"], "lightBlue"];

var spring = [["SPRING"],["March", "April", "May"], ["Mardi Gras", "Easter", "Purim", "Passover", "Earth Day", "Cinco De Mayo", "Mother's Day"], "green"]

var summer = [["SUMMER"],["June", "July", "August"], ["Father's Day", "Independence Day"], "yellow"]

var autumn = [["AUTUMN"],["September", "October", "November"], ["Rosh Hashanah", "Yom Kippur", "Columbus Day", "Halloween", "Day of the Dead", "All Soul's Day", "Veteran's Day", "Thanksgiving"], "red"]

var seasons = {
	winter: winter,
	spring: spring,
	summer: summer,
	autumn: autumn
}

input.on("change", function() {
	console.log(this);
	this.value = this.value.toLowerCase();
	if (!seasons[this.value]) {
		if (this.value === "fall") {
			body.append("Did you mean Autumn? Try again.")
			return
		}
		else {
			body.append(this.value + " is not a season! Try again.")
			return
		}
	}
	printSeason(seasons[this.value]);
});

// The following code is for reference...
//
// interest = prompt("What is your favorite season?");
// printSeason(seasons[interest])

// if (interest === "winter") {
// 	printSeason(winter)
// } else if (interest === "spring") {
// 	printSeason(spring)
// } else if (interest === "summer") {
// 	printSeason(summer)
// } else if (interest === "autumn" || "fall") {
// 	printSeason(autumn)
// }
