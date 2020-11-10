/* only execute this script when the document is ready */
$(document).ready(function(){
    /* function called when you click of the button */
    $("#close").click(function(){
        
        /* this if else to change the text in the button */
        if($("#close").text() == "☰"){
         $("#close").text("🞬");
        }else{
          $("#close").text("☰");
        }
      
      /* this function toggle the visibility of our "li" elements */
      $("li").toggle("slow");
    });
  });