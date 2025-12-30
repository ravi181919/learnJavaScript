// Global Scope =>

// function scope

function greet(nameOfPersone = "Ravi") {
  let name = nameOfPersone;
  console.log(`Welcome, ${name} `);
}
greet("nikku");

// Block Scope => {}
    if(1 > 0) {
        let name = "Hii";
        console.log(name);
    }
