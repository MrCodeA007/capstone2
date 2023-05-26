`use strict`;
//gathered inputs
const imageEl = document.getElementById(`images`);
const mountainSelectorEl = document.getElementById(`mountainSelector`);

//function to display the mountain names from the mountainsArray in mountainData.js
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
  // set before inserting the rows to clear the previous set tables first until showing the new selected state
    tbodyEl.innerHTML = "";
imageEl.innerHTML = "";

//insert row into tbody in html
   selectedmountain.forEach((mountain) => {
    const row = tbodyEl.insertRow();

    // insert cell(s) into the row we have put into the tbody to put in a called property into it from the mountains array.
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
   

});
 


//-----------------------------------------------------------------------------

const tbodyEl = document.getElementById(`mountainDataTable`)
dropdownmountainSelector();