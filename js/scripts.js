
$(document).ready(function() {
  $("form#monster").submit(function(event) {
    event.preventDefault();
    var wingsImageSrc = $("input:radio[name=wings]:checked").val();
    var eyesImageSrc = $("input:radio[name=eyes]:checked").val();
    var mouthImageSrc = $("input:radio[name=mouth]:checked").val();
    var clawsImageSrc = $("input:radio[name=claws]:checked").val();




  $("#result") .append( wingsImageSrc + eyesImageSrc + mouthImageSrc + clawsImageSrc + "  This is your Monster!!")
  $('.container').hide();
  $("#result").hide();
  })

});
