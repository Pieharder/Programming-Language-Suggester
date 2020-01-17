$(document).ready(function(){
  $("form#languageChoices").submit(function(event) {
    event.preventDefault();
    var osChoice = $("#os").val();
    var colorChoice = $("#favColors").val();
    var cpuChoice = $("#processor").val();
    var gpuChoice = $("#graphics").val();
    var coolingChoice = $("#cooling").val();
    console.log(osChoice, colorChoice, cpuChoice, gpuChoice, coolingChoice)
    if (osChoice === "1" || osChoice === "2" && cpuChoice === "1", "3" && gpuChoice === "1", "2" ) {
      $("#cSharp").show();
      $("#or").show();
      $("#javaScript").show();
      $("#python").hide();
    } else if (osChoice === "4" || coolingChoice === "1") {
      $("#javaScript").hide();
      $("#cSharp").hide();
      $("#python").show();
    } else if (osChoice === "3" || cpuChoice === "2" || gpuChoice === "3") {
  
    } else if (colorChoice === "1", "2", "3", "4" ) {
      $("#allTheAbove").show();
  } else {
    $("#allTheAbove").show();
  }
  });
});