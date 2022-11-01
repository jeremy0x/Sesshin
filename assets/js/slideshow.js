// black apparel
let blackIndex=0;function blackCarousel(){var e,l=document.getElementsByClassName("blackSlides");for(e=0;e<l.length;e++)l[e].style.display="none";blackIndex++,blackIndex>l.length&&(blackIndex=1),l[blackIndex-1].style.display="block",setTimeout(blackCarousel,1e3)}blackCarousel();
// blue apparel
let blueIndex=0;function blueCarousel(){var e,l=document.getElementsByClassName("blueSlides");for(e=0;e<l.length;e++)l[e].style.display="none";blueIndex++,blueIndex>l.length&&(blueIndex=1),l[blueIndex-1].style.display="block",setTimeout(blueCarousel,1e3)}blueCarousel();
// tan apparel
let tanIndex=0;function tanCarousel(){var e,n=document.getElementsByClassName("tanSlides");for(e=0;e<n.length;e++)n[e].style.display="none";tanIndex++,tanIndex>n.length&&(tanIndex=1),n[tanIndex-1].style.display="block",setTimeout(tanCarousel,1e3)}tanCarousel();
// white apparel
// let whiteIndex=0;function whiteCarousel(){var e,t=document.getElementsByClassName("whiteSlides");for(e=0;e<t.length;e++)t[e].style.display="none";whiteIndex++,whiteIndex>t.length&&(whiteIndex=1),t[whiteIndex-1].style.display="block",setTimeout(whiteCarousel,1e3)}whiteCarousel();