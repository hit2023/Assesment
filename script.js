let dob = document.getElementById("birthdate");
let currentDate = document.getElementById("currentdate");
let output = document.getElementById("output");

document.getElementById("CalculateBtn").addEventListener("click", ()=>{
if(dob.value=="" || currentDate.value==""){
    output.innerHTML = "Please select Date";
}
else{

    calculateAgeDifference(dob.value,currentDate.value);
}
});
function calculateAgeDifference(start, end){    
    console.log(typeof(start));
    let dobYear = parseInt(start.substring(0,4), 10); //Base 10
    let dobMonth = parseInt(start.substring(5,7), 10);
    let dobDate = parseInt(start.substring(8,10), 10);
    let currYear = parseInt(end.substring(0,4), 10); //Base 10
    let currMonth = parseInt(end.substring(5,7), 10);
    let currDate = parseInt(end.substring(8,10), 10);
    
    let yearAgeDiff = currYear - dobYear;

    let monthAgeDiff;
    if(currMonth >= dobMonth) {
    monthAgeDiff = currMonth - dobMonth;
}
else{
yearAgeDiff--;
monthAgeDiff = 12 + currDate - dobDate;
}
  
let DateAgeDiff;
if(currMonth >= dobMonth) {
DateAgeDiff = currDate - dobDate;
}
else{
    monthAgeDiff--;
    noOFDaysInDOB = daysInmonth(dobmonth,dobYear);
    DateAgeDiff = noOFDaysInDOB+currDate-dobDate;
if(monthAgeDiff<0){
    monthAgeDiff=11;
    yearAgeDiff--;
}
}
outpit.interHTML = yearAgeDiff + "years," + monthAgeDiff + "month," + DateAgeDiff + "days,";;
}
function daysInmonth (month, year){
    return new date (year, month, 0).getdata();
}
