$(document).ready(function() { 

	//Default Action
	$(".tab_conteudo").hide();
	$("ul.tabs li:first").addClass("active").show(); 
	$(".tab_conteudo:first").show(); 
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); 
		$(this).addClass("active"); 
		$(".tab_conteudo").hide(); 
		var activeTab = $(this).find("a").attr("href"); 
		$(activeTab).fadeIn(); 
		return false;
	});
	

});