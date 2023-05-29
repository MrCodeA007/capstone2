const parkTypesArray = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
]

const parktypeSelectorEl = document.getElementById(`parktypeSelector`);
function parktypedropdownSelector() {
  for (i = 0; i < parkTypesArray.length; i++) {
    let optionEl = document.createElement("option");
    const parkLocations = parkTypesArray[i];
    optionEl.textContent = parkLocations;
    parktypeSelectorEl.appendChild(optionEl);
  }
}

parktypedropdownSelector();