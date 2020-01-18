$(document).ready(function() {
  $("form#languageChoices").submit(function(event) {
    event.preventDefault();
    var cpuChoice = $("#processor").val();
    var gpuChoice = $("#graphics").val();
    var coolingChoice = $("#cooling").val();

    if ((osChoice === "No Preference") || (osChoice === "Windows" && cpuChoice === "No Preference", "Intel" + gpuChoice === "No Preference" + "Nvidia")) {
      $("#cSharp").show();
      $("#or").show();
      $("#javaScript").show();
      $("#python").hide();
      $("#cPlusPlus").hide();
    } else if ((osChoice === "Linux") || (coolingChoice === "No Preference")) {
      $("#javaScript").hide();
      $("#or").hide();
      $("#cSharp").hide();
      $("#python").show();
      $("#cPlusPlus").hide();
    }
    var osChoice = $("#os").val();
    if ((osChoice === "Apple")
      $("#javaScript").hide();
      $("#or").hide();
      $("#cSharp").hide();
      $("#python").show();
      $("#cPlusPlus").hide();
    } else (osChoice === "Windows" || "Linux" || "No Preference")
      $("#javaScript").hide();
      $("#or").hide();
      $("#cSharp").hide();
      $("#python").hide();
      $("#cPlusPlus").show();


    var colorChoice = $("#favColors").val(); 
    if (colorChoice === "No Preference") {
      $("#javaScript").hide();
      $("#or").hide();
      $("#cSharp").hide();
      $("#python").hide();
      $("#cPlusPlus").show();
      $("#allTheAbove").hide();
    } else  (colorChoice === "Red" || "Blue" || "Green")
      $("#javaScript").hide();
      $("#or").hide();
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
});