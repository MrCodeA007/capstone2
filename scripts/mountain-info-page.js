`use strict`;

const imageEl = document.getElementById(`images`);
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
const mountainDivEl = document.getElementById('mountainInfo')

 //one selected state or value
  mountainSelectorEl.addEventListener('change', () => {

 


 let selectedValue = mountainSelectorEl.value;

//an array of parks
const selectedmountain = mountainsArray.filter(
   (mountain) => mountain.name === selectedValue )
  

   const tbodyEl = document.querySelector("tbody");
    tbodyEl.innerHTML = "";
imageEl.innerHTML = "";


   selectedmountain.forEach((mountain) => {
    const row = tbodyEl.insertRow();

    const cellName = row.insertCell();
    cellName.innerHTML= mountain.name;

    const cellDesc = row.insertCell();
    cellDesc.innerHTML = mountain.desc;

    const cellElevation = row.insertCell();
    cellElevation.innerHTML = mountain.elevation;

const imgEl = document.createElement(`img`)
imgEl.src = `./images/${mountain.img}`;
imgEl.alt = mountain.name;
imageEl.appendChild(imgEl);
   });
   




 //);
//

// //console.log(selectedparks) worked;
// selectedparks.forEach((park) => {

//   const row = tbodyEl.insertRow();

//   const cellLocationName = row.insertCell();
//   cellLocationName.innerHTML = park.LocationName;

//   const cellAddress = row.insertCell();
//   cellAddress.innerHTML = park.Address;

//   const cellCity = row.insertCell();
//   cellCity.innerHTML = park.City;

//   const cellState = row.insertCell();
//   cellState.innerHTML = park.State;

//   const cellZipCode = row.insertCell();
//   cellZipCode.innerHTML = park.ZipCode;

//   const cellPhone = row.insertCell();
//   cellPhone.innerHTML = park.Phone;

//   if (park.Address === 0) {
//     cellAddress.innerHTML = "Not available";
//   }
//   if (park.Phone === 0 ) {
//     cellPhone.innerHTML = "Not available"; 
//   }
//   if (park.ZipCode === 0) {
//     cellZipCode.innerHTML = "Not available";
//   }
});
 //});


//-----------------------------------------------------------------------------

const tbodyEl = document.getElementById(`mountainDataTable`)
dropdownmountainSelector();