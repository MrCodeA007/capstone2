`use strict`

const  searchSelectorEl = document.getElementById(`searchSelector`);
function dropdownSelector() {
    for (i = 0; i <locationsArray.length; i++) {
    let optionEl =document.createElement("option");
    const locationAreas = locationsArray[i];
    optionEl.textContent = locationAreas;
    searchSelectorEl.appendChild(optionEl);
}
}
dropdownSelector();
//---------------------------------------------------------
function onsearchSelectorClickedChanged() {
    let selectedValue =searchSelectorEl.value;
    const selectedstate = nationalParksArray.filter(
    (statelocale) => statelocale.State === selectedValue
);
console.log(selectedstate); worked
seletectedstate.forEach((park) => {
    const row = tbody.insertRow();
    
    const cellLocale = row.insertCell();
    cellLocale.innerHTML = park.LocationName;

}
) 
}

searchSelectorEl.onchange = onsearchSelectorClickedChanged;


