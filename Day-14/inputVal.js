//find the value of an iput box

$("inpute").on("keyup", function () {
  var value = $(this).val();
  $("p").text(value);
});
trigger("keyup");
