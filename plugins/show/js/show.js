/*
                =============================
                  jQuery Show Plugin
                            v0.1

                   Demo and Documentation:
                 no have yet
                =============================

    A jQuery plugin for Show Div, tables.

    Author: Douglas Deodato (http://www.douglasdeodato.com)
    Date: 2012-02-10

    Copyright 2012, Douglas Deodato
    MIT Licensed (http://www.opensource.org/licenses/mit-license.php)
*/

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