const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navItem = document.querySelectorAll('nav a');
navItem.forEach((item, index) => {
  item.textContent = siteContent['nav'][`nav-item-${index+1}`];
  item.style.color = 'green';
});

let navBar = document.querySelector('nav');
let newA = document.createElement("a");
let newP = document.createElement("a");
newA.style.color = 'green';
newP.style.color = 'green';
newA.textContent = 'Append';
newP.textContent = 'Prepend';
navBar.append(newA);
navBar.prepend(newP);

// ==================================
let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];

// ==================================

let ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent['cta']['button'];
// ==================================

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src'];
ctaImg.setAttribute('src', siteContent['cta']['img-src']);
// ==================================

let featH4 = document.querySelector('.top-content .text-content:nth-child(1) h4');
featH4.textContent = siteContent['main-content']['features-h4'];
let featContent = document.querySelector('.top-content .text-content:nth-child(1) p');
featContent.textContent = siteContent['main-content']['features-content'];

let aboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4');
aboutH4.textContent = siteContent['main-content']['about-h4'];
let aboutContent = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutContent.textContent = siteContent['main-content']['about-content'];

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let servicesH4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
servicesH4.textContent = siteContent['main-content']['services-h4'];
let servicesContent = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servicesContent.textContent = siteContent['main-content']['services-content'];

let productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
productH4.textContent = siteContent['main-content']['product-h4'];
let productContent = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productContent.textContent = siteContent['main-content']['product-content'];

let visionH4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
visionH4.textContent = siteContent['main-content']['vision-h4'];
let visionContent = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionContent.textContent = siteContent['main-content']['vision-content'];
// ==================================

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

let contactAddress = document.querySelector('.contact p:nth-child(2)');
contactAddress.textContent = siteContent['contact']['address'];

let contactPhone = document.querySelector('.contact p:nth-child(3)');
contactPhone.textContent = siteContent['contact']['phone'];

let contactEmail = document.querySelector('.contact p:nth-child(4)');
contactEmail.textContent = siteContent['contact']['email'];
// ==================================

let footerCopy = document.querySelector('footer p');
footerCopy.textContent = siteContent['footer']['copyright'];
