// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(element) {
    return element.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(element) {
    const splitName = element.split(' ');
    return {
      firstName: splitName[0],
      lastName: splitName[1]
    };
  });
}

function attributesToPhrase(drivers) {
  const driverInfo = drivers.map(function(element) {
    return
  })
}
