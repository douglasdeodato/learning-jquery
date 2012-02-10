$(document).ready(function(){
   $('#conteudo').hide(); 
   $('a#exibir').click(function(){
   $('#conteudo').show('slow');  
   return false
   });
   $('a#ocultar').click(function(){
   $('#conteudo').hide('slow');
   return false
   })
  });