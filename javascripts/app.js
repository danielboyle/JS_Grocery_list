$(document).ready(function() {
  var $ul = $("ul");

  function addItem(name, quantity) {
    $ul.append("<li>" + quantity + " " + name + "</li>")
  }

  $("form").on("submit", function(e) {
    e.preventDefault();
    var $form = $(this)
        $item_name = $form.find("#item_name"),
        name = $item_name.val(),
        quantity = $form.find("#quantity").val() || 1;

    addItem(name, quantity);
    $form.get(0).reset();
    $("#item_name").focus();
  });

});