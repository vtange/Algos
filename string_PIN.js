function validatePIN(pin) {
  //return true or false
  return (pin.length === 4 || pin.length === 6) && pin.search(/\D/g) === -1;
}

//damn
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}