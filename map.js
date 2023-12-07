let poemMap;
poemMap = L.map("map");
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(poemMap);

poemMap.setView([39.380956, -99.990139], 4);

let circlewolfnotherrm = L.circle([45.430400, -110.9786725], {
    color: 'gray',
    fillColor: '#c4c4c4',
    fillOpacity: 0.5,
    radius: 300000
}).addTo(poemMap);

circlewolfnotherrm.bindPopup("<b>Gray Wolves</b>");

let circleWolfpacificnw = L.circle([47.778820, -119.109035], {
    color: 'gray',
    fillColor: '#c4c4c4',
    fillOpacity: 0.5,
    radius: 300000
}).addTo(poemMap);

circleWolfpacificnw.bindPopup("<b>Gray Wolves</b>");

let circleWolfwesterngl = L.circle([44.991862, -87.181804], {
    color: 'gray',
    fillColor: '#c4c4c4',
    fillOpacity: 0.5,
    radius: 300000
}).addTo(poemMap);

circleWolfwesterngl.bindPopup("<b>Gray Wolves</b>");

let circleWolfalaska = L.circle([65.322285, -151.502464], {
    color: 'gray',
    fillColor: '#c4c4c4',
    fillOpacity: 0.5,
    radius: 300000
}).addTo(poemMap);

circleWolfalaska.bindPopup("<b>Gray Wolves</b>");

let circleWolfnc = L.circle([35.645893571561984, -79.53227863853905], {
    color: 'red',
    fillColor: '#ff89a1',
    fillOpacity: 0.5,
    radius: 300000
}).addTo(poemMap);

circleWolfnc.bindPopup("<b>Red Wolves</b>");

let circleMoosem = L.circle([45.346405, -69.396259], {
    color: 'brown',
    fillColor: '#550012',
    fillOpacity: 0.5,
    radius: 300000
}).addTo(poemMap);

circleMoosem.bindPopup("<b>Moose</b>");

let circleMooseidaho = L.circle([47.975674, -114.598243], {
    color: 'brown',
    fillColor: '#550012',
    fillOpacity: 0.5,
    radius: 300000
}).addTo(poemMap);

circleMooseidaho.bindPopup("<b>Moose</b>");

let circleMoosealaska = L.circle([65.322285, -151.502464], {
    color: 'brown',
    fillColor: '#550012',
    fillOpacity: 0.5,
    radius: 250000
}).addTo(poemMap);

circleMoosealaska.bindPopup("<b>Moose</b>");

let circleSquirrels = L.circle([40.77827303655885, -73.92299790704618], {
    color: 'gray',
    fillColor: '#550012',
    fillOpacity: 0.5,
    radius: 200000
}).addTo(poemMap);

circleSquirrels.bindPopup("<b>Eastern Gray Squirrel</b>");


