`use strict`;

const mountainSelectorEl = document.getElementById(`mountainSelector`);
function dropdownmountainSelector() {
  for (i = 0; i < mountainsArray.length; i++) {
    let optionEl = document.createElement("option");
    const mountainInfo = mountainsArray[i];
    optionEl.textContent = mountainInfo.name;
    mountainSelectorEl.appendChild(optionEl);
  }
}
//-------------------------------------------------------------------------
function onmountainSelectorClickedChanged() {
  //one selected state or value
mountainSelectorEl.addEventListener('change', () => {
  const tbodyEl = document.querySelector("#mountainDataTable");
  tbodyEl.innerHTML = "";


let selectedValue = mountainSelectorEl.value;

//an array of parks
const selectedMountains = mountainsArray.filter(
  // (park) => park.State === selectedValue (arrow function method)
  function(mountains) {
      return mountains.name === selectedValue;
  }
);

//console.log(selectedparks) worked;
selectedMountains.forEach((mountains) => {

  const row = tbodyEl.insertRow();

  const cellLocationName = row.insertCell();
  cellLocationName.innerHTML = mountains.name;

  const cellDescription = row.insertCell();
  cellDescription.innerHTML = mountains.desc;

  const cellElevation = row.insertCell();
  cellElevation.innerHTML = mountains.elevation; 

  // const cellState = row.insertCell();
  // cellState.innerHTML = park.State;

  // const cellZipCode = row.insertCell();
  // cellZipCode.innerHTML = park.ZipCode;

  // const cellPhone = row.insertCell();
  // cellPhone.innerHTML = park.Phone;

  // if (park.Address === 0) {
  //   cellAddress.innerHTML = "Not available";
  // }
  // if (park.Phone === 0 ) {
  //   cellPhone.innerHTML = "Not available"; 
  // }
  // if (park.ZipCode === 0) {
  //   cellZipCode.innerHTML = "Not available";
  // }
});
});
} 

//-----------------------------------------------------------------------------

const tbodyEl = document.getElementById(`mountainDataTable`)
mountainSelectorEl.onchange = onmountainSelectorClickedChanged; 

dropdownmountainSelector();