$(document).ready(function(){
  $("form#languageChoices").submit(function(event) {
    event.preventDefault();
    var osChoice = $("#os").val();
    var colorChoice = $("#favColors").val();
    var cpuChoice = $("#processor").val();
    var gpuChoice = $("#graphics").val();
    var coolingChoice = $("#cooling").val();
    console.log(languageChoice, colorChoice, cpuChoice, gpuChoice, coolingChoice)
    if (osChoice === "1" ) {
      $("#cSharp").show();
      $("#javaScript").hide();
      $("#python").hide();
    } else if (osChoice === "4") {
    $("#javaScript").hide();
    $("#cSharp").hide();
    $("#python").show();
  }
  });
});