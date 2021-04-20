/*  
When a section is active, change logo, change color of text in the menu, change background color of the panel
*/

function aboutActive() {
  var x = document.getElementById("logo_black");
  var y = document.getElementById("logo_grey");
		x.style.display = "block";
		y.style.display = "none";
  document.getElementById("aboutActive").style.color = "rgb(245, 61, 31)";
  document.getElementById("servicesActive").style.color = "rgb(31, 30, 29)";  
  document.getElementById("workActive").style.color = "rgb(31, 30, 29)";  
  document.getElementById("contactActive").style.color = "rgb(31, 30, 29)"; 
  document.getElementById("myPanel").style.backgroundColor ="Transparent";     
}
function servicesActive() { 
  var x = document.getElementById("logo_black");
  var y = document.getElementById("logo_grey");
		x.style.display = "none";
		y.style.display = "block";
  document.getElementById("servicesActive").style.color = "rgb(245, 61, 31)";
  document.getElementById("aboutActive").style.color = "rgb(230, 230, 230)";  
  document.getElementById("workActive").style.color = "rgb(230, 230, 230)";  
  document.getElementById("contactActive").style.color = "rgb(230, 230, 230)";
  document.getElementById("myPanel").style.backgroundColor ="rgb(31, 30, 29, 0.9)";   
}	 
function workActive() {
  var x = document.getElementById("logo_black");
  var y = document.getElementById("logo_grey");
  x.style.display = "block";
  y.style.display = "none";
  document.getElementById("workActive").style.color = "rgb(245, 61, 31)";
  document.getElementById("aboutActive").style.color = "rgb(31, 30, 29)";    
  document.getElementById("servicesActive").style.color = "rgb(31, 30, 29)";  
  document.getElementById("contactActive").style.color = "rgb(31, 30, 29)"; 
  document.getElementById("myPanel").style.backgroundColor ="rgb(255, 255, 255, 0.95)";   
}
function contactActive() {
  var x = document.getElementById("logo_black");
  var y = document.getElementById("logo_grey");
  x.style.display = "none";
  y.style.display = "block";
  document.getElementById("contactActive").style.color = "rgb(245, 61, 31)";
  document.getElementById("aboutActive").style.color = "rgb(230, 230, 230)";
  document.getElementById("servicesActive").style.color = "rgb(230, 230, 230)";   
  document.getElementById("workActive").style.color = "rgb(230, 230, 230)"; 
  document.getElementById("myPanel").style.backgroundColor ="rgb(31, 30, 29, 0.9)";   
}

function updateStageOne() {
  sectionOption().firstSection();
  colorNavigationBar().firstSection();
}

function updateStageTwo() {
  sectionOption().secondSection();
  colorNavigationBar().secondSection();
}

function updateStageThree() {
  sectionOption().thirdSection();
  colorNavigationBar().thirdSection();
}

function updateStageFour() {
  sectionOption().fourthSection();
  colorNavigationBar().fourthSection();
}

function sectionOption() {
  let toggleLogo = new Object();
  const BLOCK = "block";
  const NONE = "none";
  let logoGray = document.querySelector("#logo_grey");
  let logoBlack = document.querySelector("#logo_black");

  toggleLogo.firstSection = function () {
    logoGray.style.display = NONE;
    logoBlack.style.display = BLOCK;
  };

  toggleLogo.secondSection = function () {
    logoGray.style.display = BLOCK;
    logoBlack.style.display = NONE;
  };
  
  toggleLogo.thirdSection = function () {
    logoGray.style.display = NONE;
    logoBlack.style.display = BLOCK;
  }; 

  toggleLogo.fourthSection = function () {
    logoGray.style.display = BLOCK;
    logoBlack.style.display = NONE;
  };    
  return toggleLogo;
}

function colorNavigationBar() {
  let section = new Object();
  const navigationBarElements = document.querySelector(".navigation ul").children;
  const isNavigationElementsRendered = () => navigationBarElements.length !== 0;

  section.firstSection = function () {
    if (!isNavigationElementsRendered()) return;
    navigationBarElements[0].classList.add("navigation-section-one");
    navigationBarElements[0].classList.remove("navigation-section-one-not-selected");
    navigationBarElements[0].classList.add("navigation-section-two-not-selected");
    navigationBarElements[0].classList.add("navigation-section-three-not-selected");
    navigationBarElements[0].classList.add("navigation-section-four-not-selected");	
  };
  section.secondSection = function () {
    if (!isNavigationElementsRendered()) return;
    navigationBarElements[1].classList.add("navigation-section-two");
    navigationBarElements[0].classList.remove("navigation-section-two-not-selected");	
    navigationBarElements[0].classList.add("navigation-section-one-not-selected");
    navigationBarElements[0].classList.add("navigation-section-three-not-selected");
    navigationBarElements[0].classList.add("navigation-section-four-not-selected");	
  };
  section.thirdSection = function () {
    if (!isNavigationElementsRendered()) return;
    navigationBarElements[1].classList.add("navigation-section-third");
    navigationBarElements[0].classList.remove("navigation-section-third-not-selected");	
    navigationBarElements[0].classList.add("navigation-section-one-not-selected");
    navigationBarElements[0].classList.add("navigation-section-two-not-selected");	
    navigationBarElements[0].classList.add("navigation-section-four-not-selected");	
  }; 
  section.fourthSection = function () {
    if (!isNavigationElementsRendered()) return;
    navigationBarElements[1].classList.add("navigation-section-fourth");
    navigationBarElements[0].classList.remove("navigation-section-fourth-not-selected");	
    navigationBarElements[0].classList.add("navigation-section-one-not-selected");
    navigationBarElements[0].classList.add("navigation-section-two-not-selected");	
    navigationBarElements[0].classList.add("navigation-section-three-not-selected");		
  };    
  return section;
}

