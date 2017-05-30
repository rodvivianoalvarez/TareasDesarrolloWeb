$(document).ready(function(){
  
  // Donde queremos cambiar el tamaño de la fuente
  var donde = $('.texto');
  var sizeFuenteOriginal = donde.css('font-size');
  

  // Aumentar Font Size
  $(".aumentar").click(function(){
  	var sizeFuenteActual = donde.css('font-size');
 	  var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
    var sizeFuenteNuevo = sizeFuenteActualNum+1;
	  donde.css('font-size', sizeFuenteNuevo);
	  return false;
  });
 
  // Disminuir Font Size
  $(".disminuir").click(function(){
  	var sizeFuenteActual = donde.css('font-size');
 	  var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
    var sizeFuenteNuevo = sizeFuenteActualNum-1;
	  donde.css('font-size', sizeFuenteNuevo);
	  return false;
  });

  // Cambiar Font Family
  $("#ff").change(function() {
    $('.cambiar').css("font-family", $(this).val());
});

  // Cambiar Background Color
  $("#bgcolor").change(function() {
    $('body').css("background-color", $(this).val());
});

  
});