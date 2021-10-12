const paintWall = function (color, wall) {
  console.log("The " + wall + " wall has been painted " + color);
};

const wallLocation = "north";
const wallColor = "green";

paintWall(wallColor, wallLocation);

//Als je geen argument gebruikt, wordt de waarde undefined doorgegeven.

//De volgorde van argumenten is belangrijk, want er is geen link tussen de naam van de variabele en de naam van het argument. Als je ze omwisselt bij de aanroep wordt de output ook omgewisseld. Als je ze allebei (definitie en call) omwisselt dan is het wel goed.
