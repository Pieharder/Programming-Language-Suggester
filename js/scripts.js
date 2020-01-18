// User Interface (or front-end) logic:
$(document).ready(function () {
  $("form#languageChoices").submit(function (event) {
    event.preventDefault();

    var osChoice = $("#os").val();
    var colorChoice = $("#favColors").val();
    var cpuChoice = $("#processor").val();
    var gpuChoice = $("#graphics").val();
    var coolingChoice = $("#cooling").val();

    // Business (or back-end) logic:
    if (osChoice === "Windows") {
      $("#cSharp").hide();
      $("#javaScript").show();
      $("#python").hide();
    } else if ((cpuChoice === "AMD") || (gpuChoice === Nvidia)) {
      $("#javaScript").hide();
      $("#cSharp").hide();
      $("#python").show();
    } else {
      $("#javaScript").hide();
      $("#cSharp").show();
      $("#python").hide();
    }
  });
  $("#formReset").click(function () {
    $("#javaScript").hide();
    $("#or").hide();
    $("#cSharp").hide();
    $("#python").hide();
    $("#cPlusPlus").hide();
    $("#allTheAbove").hide();
  });
});