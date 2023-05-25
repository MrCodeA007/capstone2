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
  searchSelectorEl.addEventListener('change', () => {
    const tbodyEl = document.querySelector("#nationalParkTable");
    tbodyEl.innerHTML = "";
  

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
  
    const row = tbodyEl.insertRow();

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

    if (park.Address === 0) {
      cellAddress.innerHTML = "Not available";
    }
    if (park.Phone === 0 ) {
      cellPhone.innerHTML = "Not available"; 
    }
    if (park.ZipCode === 0) {
      cellZipCode.innerHTML = "Not available";
    }
});
});
  } 

//-----------------------------------------------------------------------------

const tbodyEl = document.getElementById(`nationalParkTable`)
searchSelectorEl.onchange = onsearchSelectorClickedChanged; 
dropdownSelector();


