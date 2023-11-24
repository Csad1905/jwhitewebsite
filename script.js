// Smooth scrolling when clicking on navbar links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
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
  { name: "Sudbury", coords: [52.0393, 0.7313] }
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
