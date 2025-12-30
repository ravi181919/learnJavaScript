// validate person is a valid voter or not

// check person age = 0 to 13 = child
// check person age = 14 year and abvove = teen
// check person age = 18 year & abvove and less then 100 = valid
// check person age = 100 year and abvove = voter is die

let person = Number(100);

if (person === 0) {
  console.log("Person age 0 not allowed");
} else {
  if (person > 0 && person <= 13) {
    console.log("Child");
  } else if (person >= 14 && person < 18) {
    console.log("Teen");
  } else if (person >= 18 && person < 100) {
    console.log("Voter");
  } else {
    console.log("Die");
  }
}


