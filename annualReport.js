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
const annualReport = document.getElementById('annualReport');




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
    headSection.style.height =  "92%";
    headSection.style.width =  "86%";
    navImage.style.display = 'none';
    navAlpha.style.display = 'block';
    yrHeaderLogo.src = 'images/yrHeaderLogo.png';
    document.body.style.overflow = 'hidden';
    annualReport.style.display = 'none';
}


function closeNavBar(){
    ulList.style.display = 'none';
    headSection.style.background = 'none'
    navAlpha.style.display = 'none';
    navImage.style.display = 'block';
    yrHeaderLogo.src = 'images/yrLogoDark.png';
    annualReport.style.display = 'flex';
    document.body.style.overflow = 'auto';
}