
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener('DOMContentLoaded',function(event){
        
    // type one character in the typewriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, location, fnCallback) {
      // check if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector(location).innerHTML = text.substring(0, i+1) +'<span class="true" aria-hidden="true"></span>';
  
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
