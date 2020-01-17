$(document).ready(function(){
  $("form#languageChoices").submit(function(event) {
    event.preventDefault();
    var osChoice = $("#os").val();
    var colorChoice = $("#favColors").val();
    var cpuChoice = $("#processor").val();
    var gpuChoice = $("#graphics").val();
    var coolingChoice = $("#cooling").val();

    if (osChoice === "1" || osChoice === "2" && cpuChoice === "1", "3" && gpuChoice === "1", "2" ) {
      $("#cSharp").show();
      $("#or").show();
      $("#javaScript").show();
      $("#python").hide();
      $("#cplusplus").hide();
    } else if (osChoice === "4" || coolingChoice === "1") {
      $("#javaScript").hide();
      $("#or").hide();
      $("#cSharp").hide();
      $("#python").show();
      $("#cplusplus").hide();
    } else if (osChoice === "3" || cpuChoice === "2" || gpuChoice === "3") {
      $("#javaScript").hide();
      $("#or").hide();
      $("#cSharp").hide();
      $("#python").show();
      $("#cplusplus").hide();
    } else if (coolingChoice === "2" || osChoice !== "2", "3") {
      $("#javaScript").hide();
      $("#or").hide();
      $("#cSharp").hide();
      $("#python").hide();
      $("#cplusplus").show();
    } else if (colorChoice === "1", "2", "3", "4" ) {
      $("#javaScript").hide();
      $("#or").hide();
      $("#cSharp").hide();
      $("#python").hide();
      $("#cplusplus").hide();
      $("#allTheAbove").show();
    } else {
    $("#javaScript").hide();
    $("#or").hide();
    $("#cSharp").hide();
    $("#python").hide();
    $("#cplusplus").hide();
    $("#allTheAbove").show();
    }
  });
});