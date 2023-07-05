//set the value of an input box
$(" button").on("click", function () {
  var text = $(this).text();
  $("input").val(text);
});
