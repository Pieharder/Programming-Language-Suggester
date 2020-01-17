$(document).ready(function(){
  $("form#languageChoices").submit(function(event) {
    event.preventDefault();
    var languageChoice = parseInt($("input#languages").val());
    var colorChoice = parseInt($("input#favColors").val());
    var cpuChoice = parseInt($("input#processor").val());
    var gpuChoice = parseInt($("input#graphics").val());
    var coolingChoice = parseInt($("input#cooling").val());

    if (languageChoice === "aa") {
      $("#cSharp").show();
      $("#javaScript").hide();
    } else {
    $("#javaScript").show();
    $("#cSharp").hide();
  }
  });
});