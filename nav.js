const navBar = document.getElementById('nav');
const ulList = document.getElementById('ulList');
const headSection = document.getElementById('headSection');
const navImage = document.getElementById('navImage');
const navImageOne = document.getElementById('navImageOne');
const navAlpha = document.getElementById('navAlpha');
const home = document.getElementById('home');
const thematic = document.getElementById('thematic');
const yrHeaderLogo = document.getElementById('yrHeaderLogo');




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
    thematic.style.display = 'none';
    home.style.display = 'none';
}


function closeNavBar(){
    ulList.style.display = 'none';
    headSection.style.background = 'none'
    navAlpha.style.display = 'none';
    navImage.style.display = 'block';
    thematic.style.display = 'block';
    home.style.display = 'flex';
}

// function homePage(){
//     home.style.display = 'flex';
//     about.style.display = 'none';
//     yrHeaderLogo.src = 'images/yrHeaderLogo.png';
//     liDefault.style.color = '#f7fffe';
//     liOne.style.color = '#f7fffe';
//     liTwo.style.color = '#f7fffe';
//     liThree.style.color = '#f7fffe';
//     liFour.style.color = '#f7fffe';
//     liFive.style.color = '#f7fffe';
//     liSix.style.color = '#f7fffe';
// }



// function aboutUsPage(){
//     home.style.display = 'none';
//     about.style.display = 'block';
//     yrHeaderLogo.src = 'images/yrLogoDark.png';
//     liDefault.style.color = '#06100e';
//     liOne.style.color = '#06100e';
//     liTwo.style.color = '#06100e';
//     liThree.style.color = '#06100e';
//     liFour.style.color = '#06100e';
//     liFive.style.color = '#06100e';
//     liSix.style.color = '#06100e';
//     navImage.src = 'images/hamburgerDark.png';
//     navImageOne.style.display = 'block';
//     ulList.style.display = 'flex';
// }


// function mobileAbout(){

//     var windowWidth = window.innerWidth;

//     if (windowWidth < 600){
//         closeNavBar();
//         aboutUsPage()
//         ulList.style.display = 'none';
//     } else {
//         aboutUsPage()
//     }
    

// }


