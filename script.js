
// adds smooth scrolling to the sections

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

  $("#button3").click(function(e) {
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
  

  // animate the dropdown menu for the pullrequests
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
});


// animate the arrow on the pull requests dropdown button
$( "a" ).click(function(e) {
  $(this).find("i").toggleClass('fa-angle-up fa-angle-down'); 
});


