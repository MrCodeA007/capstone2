`use strict`;

const mountainSelectorEl = document.getElementById(`mountainSelector`);
function dropdownmountainSelector() {
  for (i = 0; i < mountainsArray.length; i++) {
    let optionEl = document.createElement("option");
    const mountainInfo = mountainsArray[i];
    optionEl.textContent = mountainInfo;
    mountainSelectorEl.appendChild(optionEl);
  }
}

dropdownmountainSelector();