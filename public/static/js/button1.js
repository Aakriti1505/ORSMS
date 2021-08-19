$( document ).ready(function() {
     // When the select box is changed 
  $("select[name=year]").on("change",function(){ 
       // if the value isn't the default 
      if($(this).val() != "All"){   
          // loop each row     
      $("table tr").each(function(){ 
             // if the second <td> value isnt the same as the select box 
             if( $("td:eq(1)", this).text() != $("select[name=year]").val() ){   
                 $(this).hide();
           // Hide it     
          }else{       
             $(this).show();
            // Else show it   
             }
      });         
// And if the user selects "All", then show all the rows again   
  }else{
            $("table tr").show();   
 } 
});
});
