//Sections variables
const firstSection = document.querySelector("#one");
const secondSection = document.querySelector("#two");
const thirdSection = document.querySelector("#three");
const fourthSectiom = document.getElementById("four");

// hompage section's variables

// skills section's variables
var eQuote = document.querySelector("#neat");
var regex = /\ /;
var skillsBox = document.querySelector("#skillsBox");

//contacts section's variables
var columnOne = document.getElementById('column_one');
var columnTwo= document.getElementById('column_two');
var myPhoto = document.getElementById("my_photo");

// general variables
var fromTopPx = 0;

// functions to check elements location
function checkVisible(el) {
  var top = el.offsetTop;
   var left = el.offsetLeft;
   var width = el.offsetWidth;
   var height = el.offsetHeight;

   while(el.offsetParent) {
     el = el.offsetParent;
     top += el.offsetTop;
     left += el.offsetLeft;
   }

   return (
     top < (window.pageYOffset + window.innerHeight) &&
     left < (window.pageXOffset + window.innerWidth) &&
     (top + height) > window.pageYOffset &&
     (left + width) > window.pageXOffset
   );
}
function checkMiddle(el){
  var elementTop = $(el).offset().top;
  var elementBottom = elementTop + $(el).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return  elementTop < ((viewportBottom+viewportTop)/2);
};
function checkTop(el){
  var elementTop = $(el).offset().top;
  var elementBottom = elementTop + $(el).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return  elementTop < viewportTop+viewportBottom && elementTop < $(window).scrollTop();
};
function checkBottom(el){
  var elementTop = $(el).offset().top;
  var elementBottom = elementTop + $(el).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return  elementBottom < viewportBottom+250;
};


////////////////////////////////////////////////
//pages scroll efects
//////////////////////////////////////////////


jQuery(window).scroll(function(){
  if(checkBottom(fourthSectiom)){
    myPhoto.classList.add("animated");
    myPhoto.classList.add("fadeInRightBig");
    $(myPhoto).show();
    $(columnOne).show();
    columnOne.classList.add("animated");
    columnOne.classList.add("fadeInLeftBig");
  } else {
    myPhoto.classList.add("animated");
    myPhoto.classList.add("bounceOutUp");
  }
});
jQuery(window).scroll(function(){
  if(checkVisible(firstSection)){
    $(skillsBox).hide();
  } else {
    $(skillsBox).show();
  }
});
jQuery(window).scroll(function(){
  if(checkVisible(firstSection)){
    $(skillsBox).hide();
  } else {
    $(skillsBox).show();
  }
});
jQuery(window).scroll(function(){
     // distance to trigger
     if($(window).scrollTop()>0){
       $(firstSection).css("height", 0);
        $(".icon-scroll").hide();
         $("#typedtext").hide();
         $(eQuote).hide();
         jQuery('body').addClass('scrolled');
     }else if ($(window).scrollTop() == '0'){
       $(".icon-scroll").show();
       $("#typedtext").show();
        $(firstSection).css("height", '100vh');
        jQuery('body').removeClass('scrolled');
     }else{;
       $(eQuote).show();
       jQuery('body').removeClass('scrolled');
     }
 });
jQuery(window).scroll(function(){
     if(checkBottom(thirdSection)){
       secondSection.style.height = '100vh';
     }
});
jQuery(window).scroll(function(){
      if(checkMiddle(thirdSection)){
          $(eQuote).hide();
          $(skillsBox).hide();
          $('#work').show();
          $('#photo-container-one').show();
          $('#photo-container-two').show();
          $('#photo-container-three').show();
          $('#photo-container-four').show();
          $('#photo-container-five').show();
          $('#photo-container-six').show();
          $('#contact_me_h1').show();
          $(columnTwo).show();
          jQuery('body').addClass('scrolledSecond');
      }else{
        $(eQuote).show();
        $('#work').hide();
        $('#photo-container-one').hide();
        $('#photo-container-two').hide();
        $('#photo-container-three').hide();
        $('#photo-container-four').hide();
        $('#photo-container-five').hide();
        $('#photo-container-six').hide();
        $('#contact_me_h1').hide();
        $(myPhoto).hide();
        $(columnOne).hide();
        $(columnTwo).hide();
        jQuery('body').removeClass('scrolledSecond');
        secondSection.style.height = '100vh';
      }
    }
);

////////////////////////////////////////////////
//general functions
//////////////////////////////////////////////


$("#contact_me").click(function() {
    $('html,body').animate({
        scrollTop: $(fourthSectiom).offset().top + $(window).height()},
        'slow');
});
function goToByScroll() {
    $('html,body').animate({
        scrollTop: 50
    }, 'slow');
}
$(columnOne).hover(function(){
  columnOne.classList.add('bounce');
  columnOne.classList.add("animated");
});


// ////////////////////////////////////////////////
//General actions
//////////////////////////////////////////////
//////////////////////////////////////////////

$(".icon-scroll").click(goToByScroll);

$(skillsBox).hide();
$(columnOne).hide();
$(columnTwo).hide();
$(myPhoto).hide();
$('#work').hide();
$('#contact_me_h1').hide();
$('#photo-container-one').hide();
$('#photo-container-two').hide();
$('#photo-container-three').hide();
$('#photo-container-four').hide();
$('#photo-container-five').hide();
$('#photo-container-six').hide();

skillsBox.classList.add("rollIn");
skillsBox.classList.add("animated");

thirdSection.style.height = $('.treehouse-container').height();

////////////////////////////////////////////////
//skills section's random words carousel code
//////////////////////////////////////////////
eQuote.innerHTML = `javascript css html git github agile jquery underscore responsive_design photoshop ilustrator python
 excel  design sql javascript css html git github agile jquery underscore responsive_design photoshop ilustrator python
 excel  design sql javascript css html git github agile jquery underscore responsive_design photoshop ilustrator python
 excel  design sql javascript css html git github agile jquery underscore responsive_design photoshop ilustrator python
 excel  design sql javascript css html git github agile jquery underscore responsive_design photoshop ilustrator python
 excel  design sql javascript css html git github agile jquery underscore responsive_design photoshop ilustrator python
 excel  design sql`;

  var aQuote = eQuote.innerHTML.split(regex);

  eQuote.innerHTML = "";

  for(var word in aQuote){
    eQuote.innerHTML += "<span>" + aQuote[word] + "</span>";
  }

  var spans = document.querySelector("span");
  var eWords = document.querySelectorAll("span");
  var repeat = setInterval(function() {
    if(Math.random() > 0.15) {
      fClearAllHighlights(eQuote);
    }
    if($(".highlight").length < 30){
    fHighlightRandomWord(eWords);
    additionalRemove(eWords);
  }
  }, 800);

  function fHighlightRandomWord (e) {
    var iRandom = Math.floor(Math.random() * e.length);
    e[iRandom].classList.add("highlight");
    e[iRandom].classList.add("glow");
  }

  var additionalRemove = function(e){
    var nlHighlights = document.querySelectorAll("span");
    // convert the nodeList into an array
    var aHighlights = Array.prototype.slice.call(nlHighlights);
    // remove .highlight from the spans which have it
    var iRandom = Math.floor(Math.random() * aHighlights.length)
    aHighlights[iRandom].classList.remove("highlight");
  }

  function fClearAllHighlights (e) {
    var nlHighlights = e.querySelectorAll(".highlight");
    // convert the nodeList into an array
    var aHighlights = Array.prototype.slice.call(nlHighlights);
    // remove .highlight from the spans which have it
    var iRandom = Math.floor(Math.random() * aHighlights.length);
    aHighlights.forEach(aHighlight => aHighlight.addEventListener('transitionend',aremoveClass));
  }

  function aremoveClass () {
    this.classList.remove("highlight");
  }
  ////////////////////////////////////////////////
  // END OF: skills section's random words carousel code
  //////////////////////////////////////////////

  ////////////////////////////////////////////////
  //home page welcome message
  //////////////////////////////////////////////
  document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Hi! As a Front End developer based in Riga, I design and code beautifully simple things, and I love what I do."];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });


  ////////////////////////////////////////////////
  //END
  //////////////////////////////////////////////
  // Get the modal
var modal = document.getElementById('myModal');
var buttons = document.querySelectorAll('.button');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var overlay = document.querySelectorAll('.photo-overlay');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
$('.photo-overlay').click( function(){
    modal.style.display = "block";
    modalImg.src =$(this).siblings($('img')).attr('src');

});

$('.button').click( function(){
    modal.style.display = "block";
    modalImg.src =$(this).parent().children($('.photo')).children($('img')).attr('src');

});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
