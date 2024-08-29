const navBar = document.getElementById('nav');
const ulList = document.getElementById('ulList');
const headSection = document.getElementById('headSection');
const navImage = document.getElementById('navImage');
const navImageOne = document.getElementById('navImageOne');
const navAlpha = document.getElementById('navAlpha');
const home = document.getElementById('home');
const about = document.getElementById('about');
const yrHeaderLogo = document.getElementById('yrHeaderLogo');
const highlightContainer = document.getElementById('highlightContainer');




     const liDefault = document.getElementById('liDefault');
     const liOne = document.getElementById('liOne');
     const liTwo = document.getElementById('liTwo');
     const liThree = document.getElementById('liThree');
     const liFour = document.getElementById('liFour');
     const liFive = document.getElementById('liFive');
     const liSix = document.getElementById('liSix');

    
  



function openNavBar() {
    ulList.style.display = 'flex';
    headSection.style.background = '#06100e'
    navImage.style.display = 'none';
    navAlpha.style.display = 'block';
    yrHeaderLogo.src = 'images/yrHeaderLogo.png';
    highlightContainer.style.display = 'none';
    about.style.display = 'none'
}


function closeNavBar(){
    ulList.style.display = 'none';
    headSection.style.background = 'none'
    navAlpha.style.display = 'none';
    navImage.style.display = 'block';
    yrHeaderLogo.src = 'images/yrLogoDark.png';
    highlightContainer.style.display = 'flex';
    about.style.display = 'flex'
}





function updateHighlight(){


    const highlightYear = document.getElementById('highlightYear').value;

    const highlightContents = {

      "2015": " HIV service provision to people who use/inject drugs.",
      "2016": "Establishment of the first support group for HIV, SRH, TB, and PWUD-PLHIV. Leading the advocacy for the removal of the judge’s discretion.",
      "2017": "Publication of Policy brief addressing structural and legal barriers to accessing HIV services among Drug users in Nigeria.",
      "2018": "Establishment of a community-based Drop-in – Center.",
      "2019": "Policy engagement for integration of SRH services into the HIV program and supported the development of KP guidelines.",
      "2020": "Led the development of policy guidelines for the implementation of NSP, MAT, and Naloxone.",
      "2021": "Conduct of NSP pilot.",
      "2022": "Scale-up of Harm Reduction Program. Launch of YouthRISE Africa.",
      "2023": "......in progress."
    }


    document.getElementById("dynamicHighlight").textContent =  highlightContents[highlightYear];
}