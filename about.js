

function updateHighlight(){


    const highlightYear = document.getElementById('highlightYear').value;

    const highlightContents = {

      "2015": " HIV service provision to people who use/inject drugs.",
      "2016": "AEstablishment of the first support group for HIV, SRH, TB, and PWUD-PLHIV, Leading the advocacy for the removal of the judge’s discretion.",
      "2017": "Publication of Policy brief addressing structural and legal barriers to accessing HIV services among Drug users in Nigeria.",
      "2018": "Establishment of a community-based Drop-in – Center.",
      "2019": "Policy engagement for integration of SRH services into the HIV program and supported the development of KP guidelines.",
      "2020": "led the development of policy guidelines for the implementation of NSP, MAT, and Naloxone.",
      "2021": "Conduct of NSP pilot.",
      "2022": "Scale-up of Harm Reduction Program. Launch of YouthRISE Africa.",
      "2023": "......in progress."
    }


    document.getElementById("dynamicHighlight").textContent =  highlightContents[highlightYear];
}