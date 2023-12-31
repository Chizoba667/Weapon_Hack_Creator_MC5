// script.js

const assaultWeapons = [
  { name: "Compakt-665", value: 2420117777 },
  { name: "Charbtek-28", value: 2422214929 },
  { name: "UFIA PSD-2", value: 2425360657 },
  { name: "KR-200", value: 2429554961 },
  { name: "RED-34", value: 2434797841 },
  { name: "KOG-V (upgraded)", value: 2441104184 },
  { name: "Platinum Kog V", value: 3296727313 },
  { name: "Poisonous Kog V", value: 3436187921 },
  { name: "PR39", value: 2448429329 },
  { name: "LAVA PR39", value: 3220181265 },
  { name: "THE ENFORCER", value: 2455834896 },
  { name: "GRINDER", value: 2463174928 },
  { name: "GOLDEN GRINDER", value: 3242467872 },
];

const heavyWeapons = [
  { name: "ROMKET-178", value: 2464157712 },
  { name: "BMF-12", value: 2466254865 },
  { name: "SMASS-410", value: 2469400593 },
  { name: "DS-1310", value: 2473594880 },
  { name: "SERING 9", value: 2478837760 },
  { name: "VOID 6", value: 2485129232 },
  { name: "DBS 4", value: 2492469248 },
  { name: "GOLDEN DBS 4", value: 3202355200 },
  { name: "LSN-2SB", value: 2493517824 },
  { name: "BUCKSHOT", value: 2499874832 },
];

const reconWeapons = [
  { name: "SABRE-S2", value: 2540704017 },
  { name: "KRUBE-37", value: 2542801169 },
  { name: "JOLT-7 MP", value: 2545946896 },
  { name: "FERS09", value: 2550141200 },
  { name: "BOSK 3", value: 2555384081 },
  { name: "GOLDEN BOSK 3", value: 3068137745 },
  { name: "Lava Bosk 3", value: 3398439185 },
  { name: "FS80", value: 2561675536 },
  { name: "Bramson", value: 2569015569 },
  { name: "Lava Bramson", value: 3310358801 },
  { name: "THE FIRECRACKER", value: 2575372544 },
  { name: "WHISPERER", value: 2582712592 },
  { name: "JADESTONE WHISPERER", value: 3331596832 },
  { name: "Bloody Whisperer", value: 3366199840 },
];

const sniperWeapons = [
  { name: "ASIX-338", value: 2500858128 },
  { name: "NORBOK-38", value: 2502955280 },
  { name: "ARESK-07", value: 2506101008 },
  { name: "ROD-94", value: 2510295312 },
  { name: "E24 SASR", value: 2515538192 },
  { name: "IMP-S", value: 2521829648 },
  { name: "GOLDEN IMP-S", value: 3119517968 },
  { name: "BSW-77", value: 2529169680 },
  { name: "Jadestone BSW-77", value: 3323990288 },
  { name: "DREAD EYE", value: 2534477840 },
  { name: "VICE", value: 2539720720 },
];

const supportWeapons = [
  { name: "SODAW-74", value: 2646610193 },
  { name: "RSR-45", value: 2648707345 },
  { name: "AX-100 II", value: 2651853073 },
  { name: "Stainen 56", value: 2656047377 },
  { name: "QKR-89", value: 2661290257 },
  { name: "GOLDEN QKR-89", value: 3057651985 },
  { name: "SHRED-4", value: 2667581713 },
  { name: "Hauzzer-45", value: 2674921745 },
  { name: "OR-HE", value: 2680229904 },
  { name: "R.C.F-08", value: 2687570192 },
];

function initializeLists() {
  populateList("assaultList", assaultWeapons);
  populateList("heavyList", heavyWeapons);
  populateList("reconList", reconWeapons);
  populateList("sniperList", sniperWeapons);
  populateList("supportList", supportWeapons);
}

function populateList(listId, weapons) {
  const listElement = document.getElementById(listId);
  weapons.forEach((weapon) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${weapon.name}:</strong> ${weapon.value} <span class="copy-btn" data-value="${weapon.value}">(Copy)</span>`;
      listElement.appendChild(listItem);

      const copyButton = listItem.querySelector(".copy-btn");
      copyButton.addEventListener("click", function () {
          copyToClipboard(weapon.value);
      });
  });
}

function copyToClipboard(value) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert(`Value ${value} copied to clipboard!`);
}

// Call the function to initialize the lists
initializeLists();
