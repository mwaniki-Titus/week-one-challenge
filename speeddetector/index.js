//calculates demerit points
function calculateDemeritPoints() {
    const speedLimit=80;
    const kmPerDemeritPoint=5;
    const maxDemeritPoints=20;

    const speed =parseFloat(prompt("Enter the vehicle speed:"));
    
    if(isNaN(speed)){
        console.log("Invalid input. Please enter a valid number.");
    }

    if (speed < speedLimit){
        console.log("OK");
        return;
    }

    const demeritPoints = Math.floor ((speed - speedLimit) / kmPerDemeritPoint);

    if(demeritPoints > maxDemeritPoints) {
        console.log("license suspended");
    } else {
        console.log(demeritPoints);
    }
}
calculateDemeritPoints();