  //findMatching
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

   //fuzzyMatch
function fuzzyMatch (drivers, letter) {
    letter = letter.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(letter));
}

  //matchName
function matchName (drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}