// Code your solution in this file!
function distanceFromHqInBlocks(location){
	let NumberOfBlocks =  Math.abs(42-location);
	return NumberOfBlocks;

}

function distanceFromHqInFeet(location){
	let distanceInFeet = ((distanceFromHqInBlocks(location))*264);
	return distanceInFeet;
	
}

function distanceTravelledInFeet(start,end){
	let x= Math.abs(end-start);
	let distanceTravelled = x*264;
	return distanceInFeet;

}

function calculatesFarePrice(start, end){
	let distance = distanceTravelledInFeet(start,end);
	let fare;
	if  (distance <400){
		fare=0;
	} else if (distance>=401 && distance<2000)
	{
		fare=distance*0.02;
	} else if (distance>=2001 && distance<=2500)
	{
		fare= (2001-start)*0.02;
	} else if (distance >2501)
	{
		return 'Cannot travel that far';
	}

}