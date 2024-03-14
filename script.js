// CODE FROM https://css-tricks.com/snippets/css/typewriter-effect/

document.addEventListener('DOMContentLoaded',function(event){
        
    // type one character in the typewriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, location, fnCallback) {
      // check if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector(location).innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, location, fnCallback)
        }, 100);
      }
      return false;
    }

    typeWriter("We Are EmpowerED!", 0, "h1", function(){
    });
    
  });  

  var slideIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 7000); 
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }