function calculateDemeritPoints(speed) {
    const speedLimit=80;
    const kmPerDemeritPoints=5;
    const maxDemeritPoints=20;

    if (speed<speedLimit){
        console.log("ok");
        return;
    }
}
    const demeritPoints =Math.floor ((speed-speedLimit) /kmPerDemeritPoints);{

    if(demeritPoints>maxDemeritPoints){
        console.log("license suspended");
    }else{
        console.log( demeritPoints);
    }
}
