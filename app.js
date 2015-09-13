var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var initialList = [claim1, claim2, claim3, claim4, claim5];

//constructor function to add new objects to the initialList

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

var claim6 = new claim("Bob Belcher", "Specialist", 500);

var claim7 = new claim("Linda Belcher", "Optical", 700);

var claim8 = new claim("Tina Belcher", "Optical", 600);

var claim9 = new claim("Gene Belcher", "Primary Care", 250);

var claim10 = new claim("Louise Belcher", "Emergency", 2200);

initialList.push(claim6, claim7, claim8, claim9, claim10);

var totalPaidOut = 0;

//variables for writing to the DOM
var newEl, newTextAmount, position;

//position of insertion into the DOM
var position = document.getElementById('content');

//loop to go through objects and track the total amount paid out

for (var i = 0; i < initialList.length; i++) {
	
	patientPaidOut = getAmountCovered(initialList[i]);

	totalPaidOut = totalPaidOut + patientPaidOut;

	console.log("Total paid out: $" + totalPaidOut);

	newEl = document.createElement('li');
	newTextAmount = document.createTextNode("Amount covered: $" + getAmountCovered(initialList[i]) + ". " + "Total paid out: $" + totalPaidOut + "."); 
	newEl.appendChild(newTextAmount);
	position.appendChild(newEl);
}

//function for determining amount that will be paid out for the patient's visit

function getAmountCovered(patientObject) {

var visitCost = Math.round(patientObject.visitCost * getPercent(patientObject));

console.log("Paid out $" + visitCost + " for " + patientObject.patientName);

return visitCost;
}

//function to determine percentage of what will be covered depending on visit type

function getPercent(patientObject) {

var typeOfVisit = patientObject.visitType;

var percent;

if(typeOfVisit == "Optical") {
	percent = 0;
	return percent;
}else if(typeOfVisit == "Specialist") {
	percent = 0.1;
	return percent;
}else if(typeOfVisit == "Emergency") {
	percent = 1;
	return percent;
}else if(typeOfVisit == "Primary Care") {
	percent = 0.5;
	return percent;
}else {
	percent = "ERROR";
	return percent;
}
}









