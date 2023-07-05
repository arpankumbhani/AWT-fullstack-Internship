function displayVals() {
  var singleValues = $("#single").val();

  var multipleValue = $("# multiple").val();
  $("p").html(
    "<b>Single:<b>" + singleValues + "<b>Multiple:<p>" + multipleValue.join(",")
  );
}
$("select").on("change", displayVals);
displayVals();
