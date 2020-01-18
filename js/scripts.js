$(document).ready(function() {
  $("form#languageChoices").submit(function(event) {
    event.preventDefault();

  var cpuChoice = $("#processor").val(); 
  if ((cpuChoice === "No Preference") || (cpuChoice === "Intel")) {
    $("#cSharp").show();
    $("#javaScript").show();
    $("#python").hide();
  } else (cpuChoice === "AMD") 
    $("#javaScript").hide();
    $("#cSharp").hide();
    $("#python").show();
    
  var osChoice = $("#os").val();
  if (osChoice === "Linux") {
    $("#javaScript").hide();
    $("#cSharp").hide();
    $("#python").show();
  } else ((osChoice === "Windows") || (osChoice === "Apple") || (osChoice === "No Preference")) 
    $("#javaScript").hide();
    $("#cSharp").show();
    $("#python").hide();
  
  var colorChoice = $("#favColors").val(); 
  if (colorChoice === "No Preference") {
    $("#javaScript").hide();
    $("#cSharp").hide();
    $("#python").show();
  } else ((colorChoice === "Red") || (colorChoice === "Blue") || (colorChoice === "Green")) 
    $("#javaScript").show();
    $("#cSharp").hide();
    $("#python").hide();


  var gpuChoice = $("#graphics").val(); 
  if ((gpuChoice === "No Preference") || (gpuChoice === "Nvidia")) {
    $("#cSharp").show();
    $("#javaScript").hide();
    $("#python").hide();
  } else (gpuChoice === "Radeon") 
    $("#javaScript").hide();
    $("#cSharp").hide();
    $("#python").show();


  var coolingChoice = $("#cooling").val(); 
  if ((coolingChoice === "No Preference") || (coolingChoice === "Air Cooling")) {
    $("#cSharp").show();
    $("#javaScript").hide();
    $("#python").hide();
  } else (gpuChoice === "Water Cooling") 
    $("#javaScript").hide();
    $("#cSharp").hide();
    $("#python").show();
  
  $("#formReset").click(function() {
    $("#javaScript").hide();
    $("#or").hide();
    $("#cSharp").hide();
    $("#python").hide();
    $("#cPlusPlus").hide();
    $("#allTheAbove").hide();
    });   
  });
});