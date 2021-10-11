const visitorAge = 20;
const isFemale = true;
const driverStatus = "blob";
const firstName = "Sarah";
const totalAmount = 75;

// Check of bezoeker ouder is dan 18
if (visitorAge >= 18) {
    console.log("Je mag naar binnen!");
} else {
    console.log("Ho! Je bent jonger dan 18!");
}

// Check of bezoeker een vrouw is.
if (isFemale) {
    console.log("Welkom bij de ladies night mevrouw!");
} else {
    console.log("Sorry mannen mogen er vanavond niet in");
}

// Check of bezoeker de bob is.
if (driverStatus == "bob") {
    console.log("Jij bent de BOB, jij mag rijden.");
} else {
    console.log("Jij mag niet rijden.");
}

//Check of bezoeker tussen 18 en 25 is.
if (visitorAge >= 18 && visitorAge <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Jammer je krijgt geen korting.");
}

//Check of naam bezoeker Bram of Sarah is.
if (firstName == "Bram" || firstName == "Sarah") {
    console.log("Gratis biertje voor jou!");
} else {
    console.log("Jammer, geen gratis bier.");
}

//check wat total amount is en geef korting.
if (totalAmount > 100) {
    console.log("Gratis fles champagne");
} else if (totalAmount > 50) {
    console.log("Gratis portie nachos.");
} else if (totalAmount > 25) {
    console.log("Gratis (vega)bitterballen.");
} else console.log("nada");