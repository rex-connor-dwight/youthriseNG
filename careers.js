const navBar = document.getElementById('nav');
const ulList = document.getElementById('ulList');
const headSection = document.getElementById('headSection');
const navImage = document.getElementById('navImage');
const navImageOne = document.getElementById('navImageOne');
const navAlpha = document.getElementById('navAlpha');
const home = document.getElementById('home');
const about = document.getElementById('about');
const yrHeaderLogo = document.getElementById('yrHeaderLogo');
const careers = document.getElementById('careers');




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
    careers.style.display = 'none';
}


function closeNavBar(){
    ulList.style.display = 'none';
    headSection.style.background = 'none'
    navAlpha.style.display = 'none';
    navImage.style.display = 'block';
    yrHeaderLogo.src = 'images/yrLogoDark.png';
    careers.style.display = 'block';
    document.body.style.overflow = 'auto';
}



const jobOne = document.getElementById('jobOne');
const jobTwo = document.getElementById('jobTwo');



function showJobDes() {
    
    // Toggle the display property
    if (jobOne.style.display === 'none' || jobOne.style.display === '') {
        jobOne.style.display = 'block';
    } else {
        jobOne.style.display = 'none';
    }
}

function showJobTwo() {
    
    // Toggle the display property
    if (jobTwo.style.display === 'none' || jobTwo.style.display === '') {
        jobTwo.style.display = 'block';
    } else {
        jobTwo.style.display = 'none';
    }
}









