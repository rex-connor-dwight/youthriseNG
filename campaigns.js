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








// toggle scricpt

document.addEventListener("DOMContentLoaded", function () {
    // Get the button and campaignsContainer elements
    var toggleButton = document.getElementById("campaignsToggle");
    var campaignsContainer = document.querySelector(".campaignsContainer");

    // Get all campaign divs inside the campaignsContainer
    var campaignDivs = campaignsContainer.getElementsByClassName("camapaignsContents");

    // Initialize the index to track the currently displayed campaign
    var currentIndex = 0;

    // Function to show the campaign at the specified index
    function showCampaign(index) {
        // Hide all campaign divs
        for (var i = 0; i < campaignDivs.length; i++) {
            campaignDivs[i].style.display = "none";
        }

        // Show the campaign at the specified index
        campaignDivs[index].style.display = "flex";
    }

    // Initial display of the first campaign
    showCampaign(currentIndex);

    // Function to handle button click
    toggleButton.addEventListener("click", function () {
        // Increment the index, or reset to 0 if reached the end
        currentIndex = (currentIndex + 1) % campaignDivs.length;

        // Show the campaign at the updated index
        showCampaign(currentIndex);
    });
});