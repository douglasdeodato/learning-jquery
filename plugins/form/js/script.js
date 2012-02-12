// escrito por douglas deodato
//use a vontade:  douglasdeodato.com
$(document).ready(function(){
$('.error').hide();
$(".button").click(function(){
	
	$('.error').hide();
	var name = $("input#name").val();
	if (name =="") {
	$("label#name_error").show();
	$("input#name").focus();
	return false;	
		
	}
	
	
	
});
	
	
});