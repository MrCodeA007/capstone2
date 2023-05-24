`use strict`;

const searchSelectorEl = document.getElementById(`searchSelector`);
function dropdownSelector() {
  for (i = 0; i < locationsArray.length; i++) {
    let optionEl = document.createElement("option");
    const locationAreas = locationsArray[i];
    optionEl.textContent = locationAreas;
    searchSelectorEl.appendChild(optionEl);
  }
}
//--------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------
function onsearchSelectorClickedChanged() {
    //one selected state or value
  let selectedValue = searchSelectorEl.value;
  
  //an array of parks
  const selectedparks = nationalParksArray.filter(
    // (park) => park.State === selectedValue (arrow function method)
    function(park) {
        return park.State === selectedValue;
    }
  );

  //console.log(selectedparks) worked;
selectedparks.forEach((park) => {
    const row = tableEl.insertRow();

    const cellLocationName = row.insertCell();
    cellLocationName.innerHTML = park.LocationName;

    const cellAddress = row.insertCell();
    cellAddress.innerHTML = park.Address;

    const cellCity = row.insertCell();
    cellCity.innerHTML = park.City;

    const cellState = row.insertCell();
    cellState.innerHTML = park.State;

    const cellZipCode = row.insertCell();
    cellZipCode.innerHTML = park.ZipCode;

    const cellPhone = row.insertCell();
    cellPhone.innerHTML = park.Phone;
});
  } 

//-----------------------------------------------------------------------------

const tableEl = document.getElementById(`nationalParkTable`)
searchSelectorEl.onchange = onsearchSelectorClickedChanged; 
dropdownSelector();


