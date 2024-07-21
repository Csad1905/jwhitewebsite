// Smooth scrolling when clicking on navbar links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const sectionId = this.getAttribute('href');

    // Check if the href is #facebook
    if (sectionId === '#facebook') {
      // Redirect to Facebook
      window.location.href = 'https://www.facebook.com/jwhiteplumbingheating';
    } else {
      e.preventDefault();
      const section = document.querySelector(sectionId);
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const additionalOffset = 100; // Adjust this value as needed
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight - additionalOffset;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  });
});



// Initialize the map
var map = L.map("map", {
  center: [52.056736, 1.148220],
  zoom: 13,
  zoomControl: false, // Disabling default zoom control
  dragging: false, // Initially disable dragging
  scrollWheelZoom: false, // Initially disable scroll wheel zoom
  maxBounds: L.latLngBounds([51.8, 0.5], [52.5, 1.8]), // Setting max bounds for map view
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

var marker = L.marker([52.056736, 1.148220]).addTo(map);
var locations = [
  { name: "Kesgrave", coords: [52.0707, 1.2322] },
  { name: "Woodbridge", coords: [52.0907, 1.3169] },
  { name: "Hintlesham", coords: [52.0066, 0.9921] },
  { name: "Hadleigh", coords: [52.0451, 0.9567] },
  { name: "Sudbury", coords: [52.0393, 0.7313] },
  { name: "Stowmarket", coords: [52.1885, 0.9977] }, // Adding Stowmarket
  { name: "Needham Market", coords: [52.1521, 0.9916] } // Adding Needham Market
];


var bounds = locations.map(location => L.latLng(location.coords));
map.fitBounds(L.latLngBounds(bounds)); // Adjust map to show all markers

locations.forEach(function(location) {
  var marker = L.marker(location.coords).addTo(map);
});

document.addEventListener("DOMContentLoaded", function() {
  var boilerFittingsItem = document.getElementById('boilerFittingsItem');
  var centralHeatingItem = document.getElementById('centralHeatingItem');
  var servicingItem = document.getElementById('servicingItem');
  var powerFlushingItem = document.getElementById('powerFlushingItem');

  var landlordCertificatesItem = document.getElementById('landlordCertificatesItem');
  var bathroomsItem = document.getElementById('bathroomsItem');
  var generalItem = document.getElementById('generalItem');
  var underfloorItem = document.getElementById('underfloorItem');

  var boilerFittingsText = document.getElementById('boilerFittingsText');
  var centralHeatingText = document.getElementById('centralHeatingText');
  var servicingText = document.getElementById('servicingText');
  var powerFlushingText = document.getElementById('powerFlushingText');

  var landlordCertificatesText = document.getElementById('landlordCertificatesText');
  var bathroomsText = document.getElementById('bathroomsText');
  var generalText = document.getElementById('generalText');
  var underfloorText = document.getElementById('underfloorText');

  var itemsSet1 = [
    { item: boilerFittingsItem, text: boilerFittingsText },
    { item: centralHeatingItem, text: centralHeatingText },
    { item: servicingItem, text: servicingText },
    { item: powerFlushingItem, text: powerFlushingText }
  ];

  var itemsSet2 = [
    { item: landlordCertificatesItem, text: landlordCertificatesText },
    { item: bathroomsItem, text: bathroomsText },
    { item: generalItem, text: generalText },
    { item: underfloorItem, text: underfloorText }
  ];

  function toggleTextAndBorder(textElement, item) {
    var isActive = item.classList.contains("clicked");

    itemsSet1.forEach(function(set) {
      set.text.style.display = "none";
      set.item.classList.remove("clicked");
    });

    itemsSet2.forEach(function(set) {
      set.text.style.display = "none";
      set.item.classList.remove("clicked");
    });

    if (!isActive) {
      textElement.style.display = "block";
      item.classList.add("clicked");
    }
  }

  function hideTextAndBorderForSet(itemsSet) {
    itemsSet.forEach(function(set) {
      set.text.style.display = "none";
      set.item.classList.remove("clicked");
    });
  }

  boilerFittingsItem.addEventListener('click', function() {
    toggleTextAndBorder(boilerFittingsText, boilerFittingsItem);
  });

  centralHeatingItem.addEventListener('click', function() {
    toggleTextAndBorder(centralHeatingText, centralHeatingItem);
  });

  servicingItem.addEventListener('click', function() {
    toggleTextAndBorder(servicingText, servicingItem);
  });

  powerFlushingItem.addEventListener('click', function() {
    toggleTextAndBorder(powerFlushingText, powerFlushingItem);
  });

  landlordCertificatesItem.addEventListener('click', function() {
    toggleTextAndBorder(landlordCertificatesText, landlordCertificatesItem);
  });

  bathroomsItem.addEventListener('click', function() {
    toggleTextAndBorder(bathroomsText, bathroomsItem);
  });

  generalItem.addEventListener('click', function() {
    toggleTextAndBorder(generalText, generalItem);
  });

  underfloorItem.addEventListener('click', function() {
    toggleTextAndBorder(underfloorText, underfloorItem);
  });

});

const stars = document.querySelectorAll('.star');

// Function to handle star click
function handleStarClick(event) {
  const selectedValue = event.target.getAttribute('data-value');

  // Set the rating input value
  document.getElementById('rating').value = selectedValue;

  // Update stars appearance based on click
  stars.forEach(star => {
    const value = star.getAttribute('data-value');
    if (value <= selectedValue) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

// Add click event listeners to each star
stars.forEach(star => {
  star.addEventListener('click', handleStarClick);
});

// Add this JavaScript to toggle the mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.mobile-toggle');
  const navbar = document.querySelector('.navbar');

  toggle.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });
});

// JavaScript to toggle the mobile menu
document.querySelector('.mobile-toggle').addEventListener('click', function() {
  document.querySelector('.mobile-menu').style.left = '0';
});

document.querySelector('.close-menu').addEventListener('click', function() {
  document.querySelector('.mobile-menu').style.left = '-100%';
});

// JavaScript to toggle the mobile menu
document.querySelector('.mobile-toggle').addEventListener('click', function () {
  document.querySelector('.mobile-menu').style.left = '0';
});

document.querySelector('.close-menu').addEventListener('click', function () {
  document.querySelector('.mobile-menu').style.left = '-100%';
});

// Close the mobile menu when a navigation link is clicked
const mobileNavLinks = document.querySelectorAll('.mobile-menu ul li a');
mobileNavLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelector('.mobile-menu').style.left = '-100%';
  });
});


const axios = require('axios');
const cheerio = require('cheerio');

async function fetchReviews() {
    try {
        const response = await axios.get('https://www.checkatrade.com/jwhiteplumbingandheating');
        const $ = cheerio.load(response.data);
        console.log('Reviews:', $('.review').text());
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
}

fetchReviews();







