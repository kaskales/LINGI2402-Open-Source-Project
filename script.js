


var octicons_texts = ["Merged Pull Request", "Open Pull Request", "Bug Fix", "Writing Doctests", "New Feature"];

var scrollOffSet = 100
$(document).ready(function(){  
  $("#button1").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - scrollOffSet
    }, 700);
  });
  $("#button2").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - scrollOffSet
    }, 700);
  });

  $("#button4").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - scrollOffSet
    }, 700);
  });
  $("#button5").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - scrollOffSet
    }, 700);
  });

  $("#1731").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - scrollOffSet
    }, 700);
  });
  $("#1747").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - scrollOffSet
    }, 700);
  });
  $("#1937").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - scrollOffSet
    }, 700);
  });
  $("#1942").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - scrollOffSet
    }, 700);
  });
  

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function(e) {

      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;

      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  } 

  // add corresponding hovering tooltip

 /* var octicons_vars = document.getElementsByClassName("github-octicon"); 
  for (i = 0; i < octicons_vars.length; i++) {
    var text =  "hi ::after";

    
    octicons_vars[i].append('<span class="tooltiptext">'+text+'</span>');
  } */
 
});



$( "a" ).click(function(e) {
  $(this).find("i").toggleClass('fa-caret-up fa-caret-down');
  
});
