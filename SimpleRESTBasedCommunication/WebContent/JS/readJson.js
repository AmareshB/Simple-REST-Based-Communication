$(document).ready(function() {
 
    //Stops the submit request
    $("#someform").submit(function(e){
           e.preventDefault();
    });
    
    //checks for the button click event
    $("#mySubmit").click(function(e){
           
    	   //$("#ajaxResponse").append("check");
            //get the form data and then serialize that
            dataString = $("#someform").serialize();
          
            //get the form data using another method
            var test_text = $("input#try").val();
            //dataString = "trya=" + test_text;
            dataString=test_text;
            
            //make the AJAX request, dataType is set to json
            //meaning we are expecting JSON data in response from the server
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/SimpleRESTBasedCommunication/rest/server/postcheck",
                data: dataString,
                dataType: "json",
                
                //if received a response from the server
                success: function( data, textStatus, jqXHR) {
                     $("#ajaxResponse").html("");
                     console.log( data );
                     str = JSON.stringify(data);
                     
                     $("#ajaxResponse").append(str);
                     var obj=JSON.parse(str);
                     $("#ajaxResponse").append("<br/>Parsed data<br/>")
                     $("#ajaxResponse").append(obj.name);
                     
                     
                },
                
                //If there was no response from the server
                error: function(jqXHR, textStatus, errorThrown){
                     console.log("Something really bad happened " + textStatus);
                      $("#ajaxResponse").html(jqXHR.responseText);
                },
                
                //capture the request before it was sent to server
                beforeSend: function(jqXHR, settings){
                    //adding some Dummy data to the request
                    //settings.data += "&dummyData=whatever";
                    //disable the button until we get the response
                    $('#mySubmit').attr("disabled", true);
                },
                
                //this is called after the response or error functions are finished
                //so that we can take some action
                complete: function(jqXHR, textStatus){
                    //enable the button
                    $('#mySubmit').attr("disabled", false);
                }
      
            });       
    });
 
});