

$(document).ready(function( $ ) {
	
	window.post_to_sheet = function(){
	    var count = 0; 
	    var post_check = 0;
	    
	    
	    var input_str = document.getElementById("text_comment").value;
	    input_str = input_str.replace(/:/g,"");
	    input_str = input_str.replace(/;/g,"");
	    input_str = input_str.replace(/"/g,"");
	    document.getElementById("text_comment").value = input_str ;
	    
	    input_str = document.getElementById("name").value;
	    input_str = input_str.replace(/:/g,"");
	    input_str = input_str.replace(/;/g,"");
	    input_str = input_str.replace(/"/g,"");
	    document.getElementById("name").value = input_str ;
		
		var request;
		$("#data").submit(function(event){
		
	
		if (count < 1){
			var $form = $("#data");
			var $inputs = $form.find("input, select, button, textarea");
			var serializedData = $form.serialize();
	
			$inputs.prop("disabled", true);
			$('#result').html('<div class="card card-outline-danger text-center"><div class="card-block"><blockquote class="card-blockquote"><img src = "images/dna_logo.gif" width = "80px"> Saving data... </blockquote> </div></div>');
	
			request = $.ajax({
				url: "https://script.google.com/macros/s/AKfycbwGWMMJDHvxGI0WVP1G5OasN2zOmfoRsfHGw1GqSnhaysvgGufs/exec",
				type: "post",
				data: serializedData
			});
	
			request.done(function (response, textStatus, jqXHR){
				//$('#result').html('<a href="https://docs.google.com/spreadsheets/d/17jh5-1uCEFY0haO4I55i7N2nh26kcPsjeyGEF2JmoWI/edit?usp=sharing" target="_blank">Success - see Google Sheet</a>');
				$('#result').html('');
				
				if (document.getElementById("favorite").value == "1")
					{
					
					swal("บันทึกสำเร็จ", "สามารถไปดูบันทึกของคุณได้ที่ Gallery" , "success");
					}
				
				console.log("Hooray, it worked!");
				load_original_sequence();
			
			});
			request.fail(function (jqXHR, textStatus, errorThrown){
				console.error(
				"The following error occured: "+
				textStatus, errorThrown
			);
			});
	
			request.always(function () {
			$inputs.prop("disabled", false);
			});
	
			event.preventDefault();
			}
			count ++;
		});
	
	}
	
	
});

function post_it(selected_choice)
{
 if ( document.getElementById("name").value == "" || document.getElementById("jstp_value").value == "" )
					{
					swal("โปรดระบุชื่อเเละรุ่น JSTP", "ขอบคุณครับ", "info");
					
					//alert ("Please type your name");
					}
		
				else 
					{
				if (selected_choice == 1){
			document.getElementById("favorite").value = "0";
			document.getElementById("text_comment").value = "" ;
			document.getElementById("original_sequence").value = document.getElementById("v_1").value;
	
			}
			else if (selected_choice == 2){
			document.getElementById("favorite").value = "0";
			document.getElementById("text_comment").value = "" ;
			document.getElementById("original_sequence").value = document.getElementById("v_2").value;
		
			}
			else if (selected_choice == 3){
			document.getElementById("favorite").value = "0";
			document.getElementById("text_comment").value = "" ;
			document.getElementById("original_sequence").value = document.getElementById("v_3").value;
	
	
			}
			//else if (selected_choice == 4){
			//document.getElementById("original_sequence").value = document.getElementById("v_4").value;
	
			//}
			else if (selected_choice == 100){
			document.getElementById("favorite").value = "1";
	
			}

		post_to_sheet();
					
					}
 	

		
	
	
		
}
