/*Page Load Animations*/ 
   
/*Callback functions like this to make fadeIn only happen after the slideDown*/

$(document).ready(function(){
  $("header").slideDown(700, function(){
      $(".button-div").fadeIn(1000, function(){
          $(".sites-header-content").animate({
              left: 100
          });
      });
  });
});
      
      
    
/*Button Click Animations*/     

$(document).ready(function(){
   $(".resume-button").click(function(){
       $(".resume-section").slideToggle("slow");
   }); 
});

$(document).ready(function(){
   $(".email-button").click(function(){
       $(".email-section").slideToggle("slow");
   }); 
});

      
/*Enable Bootstrap Tooltip popups*/ 

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

    
/*Function to copy email address text to clipboard*/
   
function copyToClip() {
  /* Get the text field */
  var copyText = document.getElementById("emailAddress");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied!");
}
