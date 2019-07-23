
$(document).ready(function() {
  $("form#monster").submit(function(event) {
    event.preventDefault();
    var wingsImageSrc = $("input:radio[name=wings]:checked").val();
    var legsImageSrc = $("input:radio[name=legs]:checked").val();
    var armsImageSrc = $("input:radio[name=arms]:checked").val();



  $("#result").append("<img src=" + wingsImageSrc + ">")
  })

});
