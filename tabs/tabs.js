$(document).ready(function() { 

	//Default Action
	$(".tab_conteudo").hide();
	$("ul.tabs li:first").addClass("active").show(); 
	$(".tab_conteudo:first").show(); 
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_conteudo").hide(); //escondendo toda tab conteudo
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + conteudo
		$(activeTab).fadeIn(); //Fade in the active conteudo
		return false;
	});
	

});