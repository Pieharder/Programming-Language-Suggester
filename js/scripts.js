$(document).ready(function() {
  $("form#languageChoices").submit(function(event) {
    event.preventDefault();
    
    if ((cpuChoice === "No Preference") || (cpuChoice === "Intel")) {
      $("#cSharp").show();
      $("#javaScript").show();
      $("#python").hide();
      $("#cPlusPlus").hide();
    } else (cpuChoice === "AMD") 
      $("#javaScript").hide();
      $("#cSharp").hide();
      $("#python").show();
      $("#cPlusPlus").hide();
  });  
  $("form#languageChoices").submit(function(event) {
  var osChoice = $("#os").val();
  if (osChoice === "Apple")
    $("#javaScript").hide();
    $("#cSharp").hide();
    $("#python").show();
    $("#cPlusPlus").hide();
  } else ((osChoice === "Windows") || (osChoice === "Linux") || (osChoice === "No Preference"))
    $("#javaScript").hide();
    $("#or").hide();
    $("#cSharp").hide();
    $("#python").hide();
    $("#cPlusPlus").show();
});

  $("form#languageChoices").submit(function(event) {
    var colorChoice = $("#favColors").val(); 
    if (colorChoice === "No Preference") {
      $("#javaScript").hide();
      $("#cSharp").hide();
      $("#python").hide();
      $("#cPlusPlus").show();
      $("#allTheAbove").hide();
    } else (colorChoice === "Red" || "Blue" || "Green")
      $("#javaScript").hide();
      $("#cSharp").hide();
      $("#python").hide();
      $("#cPlusPlus").show();
      $("#allTheAbove").hide();
  });




  $("#formReset").click(function() {
    $("#javaScript").hide();
    $("#or").hide();
    $("#cSharp").hide();
    $("#python").hide();
    $("#cPlusPlus").hide();
    $("#allTheAbove").hide();
  });