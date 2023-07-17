let header = document.getElementById("header");
let headerLogoBlock = document.getElementById("header-logo-block");
let headerNav = document.getElementById("header-nav");
let changeLanguage = document.getElementById("dropdown");
let burgerMenu = document.getElementById("burger-menu");
let headerNavBlock = document.getElementById("header-nav-block");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--transparent");
    headerLogoBlock.style.width = "100px";
    headerNav.style.marginTop = "0px";
    changeLanguage.style.marginTop = "0px";
    burgerMenu.style.marginTop = "0px";
  } else {
    header.classList.remove("header--transparent");
    headerLogoBlock.style.width = "150px";
    headerNav.style.marginTop = "-20px";
    changeLanguage.style.marginTop = "-20px";
    burgerMenu.style.marginTop = "-20px";
  }
});

let body = document.getElementById("body");
let switch_home_to_arch = document.getElementById("link-tour");
let switch_home_to_arch1 = document.getElementById("tour1");
let switch_home_to_arch2 = document.getElementById("link-tour2");
let switch_arch_to_home = document.getElementById("arch--switch-home-page-button");
let switch_arch_block = document.getElementById("arch--switch-block");
let activity_page = document.getElementById("arch--activity-section");
let page_header = document.getElementById("home-page-header");
let go_tomain_whenClick_Prices = document.getElementById("arch--switch-price-page-link");

switch_home_to_arch.addEventListener("click", function() {
  switch_arch_block.classList.add("arch--switch-block-animate");

  setTimeout(function() {
    body.classList.add("body-style");
    activity_page.style.display = "initial";
    page_header.style.display = "none";
  }, 1650);

  setTimeout(function() {
    switch_arch_block.classList.remove("arch--switch-block-animate");
  }, 4000);
});

switch_home_to_arch1.addEventListener("click", function() {
  switch_arch_block.classList.add("arch--switch-block-animate");

  setTimeout(function() {
    body.classList.add("body-style");
    activity_page.style.display = "initial";
    page_header.style.display = "none";
  }, 1650);

  setTimeout(function() {
    switch_arch_block.classList.remove("arch--switch-block-animate");
  }, 4000);
});

switch_home_to_arch2.addEventListener("click", function() {
  switch_arch_block.classList.add("arch--switch-block-animate");

  setTimeout(function() {
    body.classList.add("body-style");
    activity_page.style.display = "initial";
    page_header.style.display = "none";
  }, 1650);

  setTimeout(function() {
    switch_arch_block.classList.remove("arch--switch-block-animate");
  }, 4000);
});

switch_arch_to_home.addEventListener("click", function() {
  switch_arch_block.classList.add("arch--switch-block-animate");

  setTimeout(function() {
    body.classList.remove("body-style");
    activity_page.style.display = "none";
    page_header.style.display = "flex";
  }, 2000);

  setTimeout(function() {
    switch_arch_block.classList.remove("arch--switch-block-animate");
  }, 4000);
});


go_tomain_whenClick_Prices.addEventListener("click", function() {
  switch_arch_block.classList.add("arch--switch-block-animate");

  setTimeout(function() {
    body.classList.remove("body-style");
    activity_page.style.display = "none";
    page_header.style.display = "flex";
  }, 2000);

  setTimeout(function() {
    switch_arch_block.classList.remove("arch--switch-block-animate");
  }, 4000);
});

function toggleMenu() {
  const burgerContainer = document.querySelector('.burger-container');
  const menu = document.querySelector('.menu');
  
  burgerContainer.classList.toggle('open');
  menu.classList.toggle('open');
}



function adjustDisplay() {
  let width = window.innerWidth;
  console.log(width);
  let burgerMenu = document.getElementById("burger-menu");
  let headerNavBlock = document.getElementById("header-nav");

  if (width > 800) {
    burgerMenu.style.display = "none";
    headerNavBlock.style.display = "block";
  } else {
    burgerMenu.style.display = "block";
    headerNavBlock.style.display = "none";
  }
}

adjustDisplay();

window.addEventListener("resize", adjustDisplay);
