// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
  return Math.abs(pickup - 42);
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(start, destination){
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let price = (distanceTravelledInFeet(start, destination) - 400) * .02;
  switch (true) {
    case distance <= 2000 :
      return price;
    case price > 2000 && price < 2500
      return 25;
    case price >

  }
}
