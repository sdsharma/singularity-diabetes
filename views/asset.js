


console.log("12345");

$(document).ready(function(){
	$("#startBtn").click(function(){
		console.log("whatip");		
		$(".circle").flip({
    		trigger: 'manual'
		});
		$(".circle").flip(true);
	});

	



	

// $('.front').transition({
//   perspective: '100px',
//   rotate3d: '45,45,0,180deg'
// });


	$("#nextBtn").click(function(){
	    if( $("#nameField").val().length > 0){
	    	Cookies.set('userName', $("#nameField").val());
	    	$(".front").empty();

	    }
	});
});