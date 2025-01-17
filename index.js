'use strict'

const applyBtn = document.getElementById('apply-btn');
const applyTxt = document.querySelectorAll('.apply-here-text');
const exosUrl = 'https://uk.indeed.com/cmp/Exos-Logistics-Ltd';




(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
  key: `AIzaSyDjN20afyM5xlkRl3fAt6QkDgD2kj5694w`,
  v: "weekly",
});





function openApplyPage(e) {
  e.preventDefault();
  window.open(exosUrl, '_blank').focus();
}


applyBtn.addEventListener('click', openApplyPage);
applyTxt.forEach((e) => e.addEventListener('click', openApplyPage));

// Initialize and add the map
let map;
51.907334024071346, -0.6628644000093339
async function initMap() {
  // The location of Uluru
  const position = { lat: 51.907334024071346, lng: -0.6628644000093339 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Leighton Buzzard
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Leighton Buzzard
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "EXOS Logistics Ltd",
  });
}

initMap();

//I think I need to add function which will decide which elements to give hidden class with transform property -100 and every second to give +100 so it will animate from the other side


// Get the button:
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
  
    
    if(entry.isIntersecting) {
      entry.target.classList.add('show-1');
    }

/* To animate elements just once leave this comment
   To animate elements each time remove this comment 
    else {
      entry.target.classList.remove('show');
    }
    */


  });
});







const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements2 = document.querySelectorAll('.hidden-2');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));



